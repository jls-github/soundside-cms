import { FormControl, FormText, Alert } from "react-bootstrap";
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
    <Alert variant="warning">Warning: Changing a question that already exists will change that question for ALL FORMS! Select "New Question" if you want to your changes to apply to a question for only this form.</Alert>
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
