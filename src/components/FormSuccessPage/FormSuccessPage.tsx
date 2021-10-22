import React from "react";
import { useLocation } from "react-router-dom";
import IForm from "../../types/form";
import PageWrapper from "../shared/PageWrapper";

export default function FormSuccessPage() {
  const location = useLocation<IForm>();

  const formId = location.state?.id;

  if (formId)
    return (
      <PageWrapper>
        <h2>Form Submitted Successfully!</h2>
        <p>
          You can view your new form at url:{" "}
          <a href={`https://soundsideforms.netlify.app/forms/${formId}`}>
            https://soundsideforms.netlify.app/forms/{formId}
          </a>
        </p>
        <p>This QR Code will give you access to above url</p>
      </PageWrapper>
    );

  return <div>Form submitted successfully!</div>;
}
