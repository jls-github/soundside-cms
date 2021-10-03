import { useState } from "react";
import { FORMS_URL } from "../../constraints/urls";
import useSubmit from "../../hooks/useSubmit";
import IForm from "../../types/form";
import { InputEnum } from "../../types/input";
import LoadingSpinner from "../shared/LoadingSpinner";
import InputsContainer from "./InputsContainer";

// TODO: Select box to pick pre-made input

export default function FormsNewPage(): JSX.Element {
  const [form, setForm] = useState<IForm>(initialFormData);

  const { success, loading, handleSubmit } = useSubmit<IForm>(FORMS_URL);

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  }

  function toggleGuest(newGuestStatus: boolean): void {
    setForm({ ...form, guest: newGuestStatus });
  }

  function handleChangeInputData(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

  if (loading) return <LoadingSpinner />;

  if (success) {
    return <div>Form submission successful!</div>;
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
        {form.inputs && (
          <InputsContainer
            inputs={form.inputs}
            handleChangeInputData={handleChangeInputData}
          />
        )}
        <button type="submit" onClick={(e) => handleSubmit(e, form)}>
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
