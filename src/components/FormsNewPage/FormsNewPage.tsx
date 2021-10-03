import { FORMS_URL, INPUTS_URL } from "../../constraints/urls";
import useFetch from "../../hooks/useFetch";
import { useFormHandlers } from "../../hooks/useFormHandlers";
import useInputDropdown from "../../hooks/useInputDropdown";
import useSubmit from "../../hooks/useSubmit";
import IForm from "../../types/form";
import IInput from "../../types/input";
import InputDropDown from "../shared/InputDropDown";
import LoadingSpinner from "../shared/LoadingSpinner";
import initialFormData from "./initialFormData";
import InputsContainer from "./InputsContainer";

// TODO: Select box to pick pre-made input

export default function FormsNewPage(): JSX.Element {
  const {
    success,
    loading: submissionLoading,
    handleSubmit,
  } = useSubmit<IForm>(FORMS_URL);

  const {
    form,
    handleChange,
    handleChangeInputData,
    toggleGuest,
    handleAddInput,
  } = useFormHandlers(initialFormData);

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
      <button
        onClick={() =>
          handleAddInput(
            inputs?.find((input) => input.name === selectedInput)
          )
        }
      >
        Add Input
      </button>
      {inputs && (
        <InputDropDown
          inputs={inputs}
          selectedInput={selectedInput}
          handleChangeSelectedInput={handleChangeSelectedInput}
        />
      )}
    </div>
  );
}
