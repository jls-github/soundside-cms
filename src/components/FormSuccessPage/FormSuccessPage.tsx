import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode";
import IForm from "../../types/form";
import PageWrapper from "../shared/PageWrapper";

export default function FormSuccessPage() {
  const location = useLocation<IForm>();

  const formId = location.state?.id;

  const formUrl = `https://soundsideforms.netlify.app/forms/${formId}`;

  useEffect(() => {
    if (formId) {
      QRCode.toCanvas(
        document.getElementById("qr-code-canvas"),
        formUrl,
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [formId, formUrl]);

  if (formId)
    return (
      <PageWrapper>
        <h2>Form Submitted Successfully!</h2>
        <p>View your new form <a href={formUrl}>here</a></p>
        <div className="d-flex justify-content-center align-items-center">
          <canvas id="qr-code-canvas"></canvas>
        </div>
      </PageWrapper>
    );

  return <div>Form submitted successfully!</div>;
}
