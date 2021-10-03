import IInput from "../../types/input";

interface InputDropDownProps {
  inputs: IInput[];
  selectedInput: string;
  handleChangeSelectedInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function InputDropDown({
  inputs,
  selectedInput,
  handleChangeSelectedInput,
}: InputDropDownProps): JSX.Element {
  return (
    <select value={selectedInput} onChange={handleChangeSelectedInput}>
      <option value="New Input">New Input</option>
      {inputs.map((input, idx) => (
        <option key={`selectable-input-${idx}`}>{input.name}</option>
      ))}
    </select>
  );
}
