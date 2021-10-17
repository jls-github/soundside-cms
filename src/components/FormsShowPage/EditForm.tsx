import { FORMS_URL, INPUTS_URL } from "../../constraints/urls";
import useFetch from "../../hooks/useFetch";
import { useFormHandlers } from "../../hooks/useFormHandlers";
import useInputDropdown from "../../hooks/useInputDropdown";
import useSubmit from "../../hooks/useSubmit";
import IForm from "../../types/form";
import IInput from "../../types/input";
import InputDropDown from "../shared/InputDropDown";
import LoadingSpinner from "../shared/LoadingSpinner";
import InputsContainer from "../shared/InputsContainer";
import {
  Container,
  Form,
  FormGroup,
  FormText,
  FormCheck,
  Button,
} from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import PageWrapper from "../shared/PageWrapper";

// TODO: Select box to pick pre-made input

interface EditFormProps {
  initialFormData: IForm;
  id: number;
}

export default function EditForm({
  initialFormData,
  id
}: EditFormProps): JSX.Element {
  const {
    form,
    handleChange,
    handleChangeInputData,
    toggleGuest,
    handleAddInput,
  } = useFormHandlers(initialFormData);

  const {
    success,
    loading: submissionLoading,
    handleSubmit,
  } = useSubmit<IForm>(`${FORMS_URL}/${id}`, "PATCH");

  const { data: inputs, loading: inputsLoading } = useFetch<IInput[]>(
    INPUTS_URL
  );

  const { selectedInput, handleChangeSelectedInput } = useInputDropdown();

  if (submissionLoading || inputsLoading) return <LoadingSpinner />;

  if (success === false) {
    return <div>Something went wrong. Please try again later...</div>;
  }

  if (success) {
    return <div>Form submission successful!</div>;
  }

  return (
    <PageWrapper>
      <h2>Edit {initialFormData.name}</h2>
      <p>
        Use this page to edit a form. After submitting, a url and QR code will
        be generated for your new form.
      </p>
      <Form>
        <hr />
        <h4>Form Info</h4>
        <hr />
        <Container>
          <FormGroup>
            <label>Form Name</label>
            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <FormText>
              Form name will only be used internally. A form name is required
              and must be unique.
            </FormText>
          </FormGroup>
          <span className="me-2">
            Is this a form for guests or regular attenders?
          </span>
          <FormCheck className="form-check-inline">
            <label>Guests</label>
            <FormCheckInput
              type="radio"
              checked={form.guest}
              onChange={() => toggleGuest(true)}
            />
          </FormCheck>
          <FormCheck className="form-check-inline">
            <label>Regular Attenders</label>
            <FormCheckInput
              type="radio"
              checked={!form.guest}
              onChange={() => toggleGuest(false)}
            />
          </FormCheck>
        </Container>
        {form.inputs && (
          <InputsContainer
            inputs={form.inputs}
            handleChangeInputData={handleChangeInputData}
          />
        )}
      </Form>
      {inputs && (
        <>
          <h5>Add another question</h5>
          <Container>
            <InputDropDown
              inputs={inputs}
              selectedInput={selectedInput}
              handleChangeSelectedInput={handleChangeSelectedInput}
            />
            <div className="my-2">
              <Button
                className="btn-primary"
                onClick={() =>
                  handleAddInput(
                    inputs?.find((input) => input.name === selectedInput)
                  )
                }
              >
                Add Selected Question
              </Button>
            </div>
          </Container>
        </>
      )}
      <div className="my-2">
        <Button
          className="btn-primary w-100"
          type="submit"
          onClick={(e) => handleSubmit(e, form)}
        >
          Update "{initialFormData.name}"
        </Button>
      </div>
    </PageWrapper>
  );
}
