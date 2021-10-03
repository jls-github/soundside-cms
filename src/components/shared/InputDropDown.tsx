import IInput from "../../types/input";

interface InputDropDownProps {
  inputs: IInput[];
}

export default function InputDropDown({
  inputs,
}: InputDropDownProps): JSX.Element {
  return (
    <select>
      <option>New Input</option>
      {inputs.map((input) => (
        <option>{input.name}</option>
      ))}
    </select>
  );
}
