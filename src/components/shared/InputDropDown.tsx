import { FormControl, FormText } from "react-bootstrap";
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
    <>
    <FormControl as="select" value={selectedInput} onChange={handleChangeSelectedInput}>
      <option value="New Input">New Question</option>
      {inputs.map((input, idx) => (
        <option key={`selectable-input-${idx}`}>{input.name}</option>
      ))}
    </FormControl>
    <FormText>You can create a new question or select one that already exists.</FormText>
    </>
  );
}
