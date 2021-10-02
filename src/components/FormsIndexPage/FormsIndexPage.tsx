import { Link } from "react-router-dom";
import { FORMS_URL } from "../../constraints/urls";
import useFetch from "../../hooks/useFetch";
import IForm from "../../types/form";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function FormsIndexPage(): JSX.Element {
  const { data: forms, loading } = useFetch<IForm[]>(FORMS_URL);

  if (loading) return <LoadingSpinner />;

  if (!forms) return <div>Something went wrong... Please try again later</div>;

  return (
    <div>
      <Link to="/forms/new">New Form</Link>
      {forms.map((form, idx) => {
        return (
          <div>
            <Link to={`/forms/${form.id}`} key={`form-${idx}`}>
              {form.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
