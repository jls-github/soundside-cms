import { useParams } from "react-router-dom";
import { FORMS_URL } from "../../constraints/urls";
import useEditMode from "../../hooks/useEditMode";
import useFetch from "../../hooks/useFetch";
import IForm from "../../types/form";
import LoadingSpinner from "../shared/LoadingSpinner";
import EditForm from "./EditForm";

export default function FormsShowPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const { editMode, toggleEditMode } = useEditMode();

  const { data: form, loading } = useFetch<IForm>(`${FORMS_URL}/${id}`);

  if (loading) return <LoadingSpinner />;
  if (!form) return <div>Something went wrong... Please try again later.</div>;

  if (editMode) return <EditForm initialFormData={form} />;

  return (
    <div>
      <p>Name: {form.name}</p>
      <p>Guest: {form.guest.toString()}</p>
      <div>
        <h3>Inputs: </h3>
        {form.inputs?.map((input, idx) => {
          return (
            <div key={`input-${idx}`}>
              <p>Name: {input.name}</p>
              <p>Label Text: {input.labelText}</p>
              <p>Type: {input.type}</p>
            </div>
          );
        })}
      </div>
      <button onClick={toggleEditMode}>Edit</button>
    </div>
  );
}
