import { useState, useEffect } from "react";
import { FORMS_URL } from "../../constraints/urls";
import IForm from "../../types/form";

export default function FormsIndexPage(): JSX.Element {
  const [forms, setForms] = useState<IForm[] | null>(null);

  useEffect(() => {
    async function fetchForms(): Promise<void> {
      const res = await fetch(FORMS_URL, {
        headers: { Authorization: "test_password" },
      });
      const json = await res.json();
      setForms(json);
    }
    fetchForms();
  }, []);

  if (!forms) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {forms.map((form) => {
        return <p>{form.name}</p>;
      })}
    </div>
  );
}
