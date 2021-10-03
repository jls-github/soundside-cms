import React from "react";
import IInput from "../../types/input";

interface InputsContainerProps {
  inputs: IInput[];
  handleChangeInputData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function InputsContainer({
  inputs,
  handleChangeInputData,
}: InputsContainerProps): JSX.Element {
  return (
    <div>
      <h3>Inputs</h3>

      {inputs.map((input, idx) => (
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
  );
}
