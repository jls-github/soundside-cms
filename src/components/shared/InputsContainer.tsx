import React from "react";
import { FormControl, FormGroup, FormText, Container } from "react-bootstrap";
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
      <hr />
      <h4>Questions</h4>
      <hr />
      {inputs.map((input, idx) => (
        <div key={`input-${idx}`}>
          <h5>Question {idx + 1}</h5>
          <Container>
            <FormGroup>
              <label>Question Name</label>
              <FormControl
                name={`name-${idx}`}
                value={input.name}
                onChange={handleChangeInputData}
              />
              <FormText>
                Question name will only be used internally. A question name is
                required and must be unique.
              </FormText>
            </FormGroup>
            <FormGroup>
              <label>Question Text</label>
              <FormControl
                name={`labelText-${idx}`}
                value={input.labelText}
                onChange={handleChangeInputData}
              />
              <FormText>This is the text that the user will see.</FormText>
            </FormGroup>
            <FormGroup>
              <label>Question Type</label>
              <FormControl
                as="select"
                style={{appearance: "auto"}}
                name={`type-${idx}`}
                value={input.type}
                onChange={handleChangeInputData}
              >
                <option value="text">text</option>
                <option value="textarea">textarea</option>
                <option value="checkbox">checkbox</option>
                <option value="number">number</option>
              </FormControl>
              <FormText>
                How do you want this question to be displayed to the user?
              </FormText>
            </FormGroup>
          </Container>
        </div>
      ))}
    </div>
  );
}
