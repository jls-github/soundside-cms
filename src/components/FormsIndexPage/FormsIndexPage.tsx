import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FORMS_URL } from "../../constraints/urls";
import useFetch from "../../hooks/useFetch";
import IForm from "../../types/form";
import LoadingSpinner from "../shared/LoadingSpinner";
import PageWrapper from '../shared/PageWrapper'

export default function FormsIndexPage(): JSX.Element {
  const { data: forms, loading } = useFetch<IForm[]>(FORMS_URL);

  if (loading) return <LoadingSpinner />;

  if (!forms) return <div>Something went wrong... Please try again later</div>;

  return (
    <main>
      <PageWrapper>
        <h2>All Forms</h2>
        {forms.map((form, idx) => {
          return (
            <div key={`form-${idx}`}>
              <Link to={`/forms/${form.id}`}>{form.name}</Link>
            </div>
          );
        })}
        <Link to="/forms/new">
          <Button className="btn-primary my-2">New Form</Button>
        </Link>
      </PageWrapper>
    </main>
  );
}
