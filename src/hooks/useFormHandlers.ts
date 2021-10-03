import { useState } from "react";
import IForm from "../types/form";
import IInput, { InputEnum } from "../types/input";

interface useFormHandlersData {
  form: IForm;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  toggleGuest: (newGuestStatus: boolean) => void;
  handleChangeInputData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleAddInput: (input?: IInput) => void;
}

export function useFormHandlers(initialFormData: IForm): useFormHandlersData {
  const [form, setForm] = useState<IForm>(initialFormData);

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

  function handleAddInput(input?: IInput): void {
    const newInput = {
      labelText: "",
      name: "",
      type: InputEnum.text,
    };
    setForm({
      ...form,
      inputs: [...(form.inputs || []), input || newInput],
    });
  }

  return {
    form,
    handleChange,
    handleChangeInputData,
    toggleGuest,
    handleAddInput,
  };
}
