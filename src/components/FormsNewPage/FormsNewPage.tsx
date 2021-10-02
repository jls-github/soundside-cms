import { useState } from "react";
import IForm from "../../types/form";
import { InputEnum } from "../../types/input";

// TODO: Button to add more inputs
// TODO: Select box to pick pre-made input
// TODO: Submit button

export default function FormsNewPage(): JSX.Element {
  const [form, setForm] = useState<IForm>(initialFormData);

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
      </form>
    </div>
  );
}

const initialFormData: IForm = {
  name: "",
  guest: true,
  inputs: [{ labelText: "", name: "", type: InputEnum["text"] }],
};
