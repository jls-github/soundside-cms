import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FORMS_URL } from "../../constraints/urls";
import useEditMode from "../../hooks/useEditMode";
import useFetch from "../../hooks/useFetch";
import IForm from "../../types/form";
import LoadingSpinner from "../shared/LoadingSpinner";
import PageWrapper from "../shared/PageWrapper";
import EditForm from "./EditForm";

export default function FormsShowPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const { editMode, toggleEditMode } = useEditMode();

  const { data: form, loading } = useFetch<IForm>(`${FORMS_URL}/${id}`);

  if (loading) return <LoadingSpinner />;
  if (!form) return <div>Something went wrong... Please try again later.</div>;

  if (editMode) return <EditForm initialFormData={form} id={parseInt(id)}/>;

  return (
    <PageWrapper>
      <h3>{form.name}</h3>
      <p>Form for {form.guest ? "guests" : "regular attenders"}</p>
      <div>
        <h3>Questions</h3>
        <Table>
          <thead>
            <tr>
              <th>Question Name</th>
              <th>Question Text</th>
              <th>Question Type</th>
            </tr>
          </thead>
          <tbody>

          {form.inputs?.map((input, idx) => {
            return (
              <tr key={`input-${idx}`}>
                <td>{input.name}</td>
                <td>{input.labelText}</td>
                <td>{input.type}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </div>
      <Button onClick={toggleEditMode}>Edit {form.name}</Button>
    </PageWrapper>
  );
}
