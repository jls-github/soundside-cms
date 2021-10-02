import { useState, useEffect } from "react";
import { FORMS_URL } from "../../constraints/urls";
import IForm from "../../types/form";

export default function FormsIndexPage(): JSX.Element {
  const [forms, setForms] = useState<IForm[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchForms(): Promise<void> {
      const res = await fetch(FORMS_URL, {
        headers: { Authorization: "test_password" },
      });
      if (res.ok) {
        const json: IForm[] = await res.json();
        setForms(json);
      } else {
        console.log(res);
      }

      setLoading(false);
    }
    fetchForms();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!forms) {
    return <div>Something went wrong... Please try again later</div>;
  }

  return (
    <div>
      {forms.map((form, idx) => {
        return <p key={`form-${idx}`}>{form.name}</p>;
      })}
    </div>
  );
}
