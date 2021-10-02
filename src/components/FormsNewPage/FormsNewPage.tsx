import { useState } from "react";
import IForm from "../../types/form";
import { InputEnum } from "../../types/input";

export default function FormsNewPage(): JSX.Element {
  const [form, setForm] = useState<IForm>(initialFormData);

  return (
    <div>
      <form>
        <label>Form Name: </label>
        <input value={form.name} />
        <br />
        <label>Guest Form?</label>
        <input type="checkbox" checked={form.guest} />
        <input type="checkbox" checked={!form.guest} />
        <br />
        <div>
          <h3>Inputs</h3>

          {form.inputs?.map((input, idx) => (
            <div key={`input-${idx}`}>
              <label>Input Name: </label>
              <input value={input.name} />
              <br />
              <label>Input Label Text: </label>
              <input value={input.labelText} />
              <br />
              <label>type</label>
              <select value={input.type}>
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
