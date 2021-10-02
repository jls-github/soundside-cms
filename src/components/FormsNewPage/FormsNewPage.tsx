import { useState } from "react";
import { FORMS_URL } from "../../constraints/urls";
import IForm from "../../types/form";
import { InputEnum } from "../../types/input";
import LoadingSpinner from "../shared/LoadingSpinner";

// TODO: Button to add more inputs
// TODO: Select box to pick pre-made input
// TODO: Submit button

export default function FormsNewPage(): JSX.Element {
  const [form, setForm] = useState<IForm>(initialFormData);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  }

  function toggleGuest(newGuestStatus: boolean): void {
    setForm({ ...form, guest: newGuestStatus });
  }

  function handleChangeInputData(
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ): void {
    const [name, id] = e.currentTarget.name.split("-");
    const value = e.currentTarget.value;
    setForm({
      ...form,
      inputs: form.inputs?.map((input, idx) => {
        if (parseInt(id) === idx) {
          return { ...input, [name]: value };
        }
        return input;
      }),
    });
  }

  function handleAddInput() {
    const newInput = {
      labelText: "",
      name: "",
      type: InputEnum.text,
    };
    setForm({
      ...form,
      inputs: [...(form.inputs || []), newInput],
    });
  }

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    fetch(FORMS_URL, {
      method: "POST",
      headers: {
        Authorization: "test_password",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
      } else {
        // TODO: handle errors
        console.log(res);
      }
      setLoading(false);
    });
  }

  if (loading) return <LoadingSpinner />

  if (success) {
    return <div>Form submission successful!</div>
  }

  return (
    <div>
      <form>
        <label>Form Name: </label>
        <input name="name" value={form.name} onChange={handleChange} />
        <br />
        <label>Guest Form?</label>
        <label>Yes</label>
        <input
          type="checkbox"
          checked={form.guest}
          onChange={() => toggleGuest(true)}
        />
        <label>No</label>
        <input
          type="checkbox"
          checked={!form.guest}
          onChange={() => toggleGuest(false)}
        />
        <br />
        <div>
          <h3>Inputs</h3>

          {form.inputs?.map((input, idx) => (
            <div key={`input-${idx}`}>
              <label>Input Name: </label>
              <input
                name={`name-${idx}`}
                value={input.name}
                onChange={handleChangeInputData}
              />
              <br />
              <label>Input Label Text: </label>
              <input
                name={`labelText-${idx}`}
                value={input.labelText}
                onChange={handleChangeInputData}
              />
              <br />
              <label>type</label>
              <select
                name={`type-${idx}`}
                value={input.type}
                onChange={handleChangeInputData}
              >
                <option value="text">text</option>
                <option value="textarea">textarea</option>
                <option value="checkbox">checkbox</option>
                <option value="number">number</option>
              </select>
            </div>
          ))}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

const initialFormData: IForm = {
  name: "",
  guest: true,
  inputs: [{ labelText: "", name: "", type: InputEnum["text"] }],
};
