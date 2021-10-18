import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Form,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { LOGIN_URL } from "../../constraints/urls";
import useSubmit from "../../hooks/useSubmit";
import LoadingSpinner from "../shared/LoadingSpinner";
import PageWrapper from "../shared/PageWrapper";

export default function LoginPage() {
  const [password, setPassword] = useState<String>("");
  const { success, loading: submitting, handleSubmit } = useSubmit<{
    password: String;
  }>(LOGIN_URL, "POST", setToken);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  if (submitting) return <LoadingSpinner />;

  return (
    <PageWrapper>
      <Card className="p-4 bg-light">
        <Form onSubmit={(e) => handleSubmit(e, { password: password })}>
          <h2 className="text-center">Soundside CMS</h2>
          <FormGroup>
            {success === false && (
              <Alert variant="warning">Incorrect password!</Alert>
            )}
            <FormLabel>Please enter your password to log in.</FormLabel>
            <input
              className="form-control"
              name="password"
              onChange={handleChange}
              placeholder="password"
            />
            <Button type="submit" className="btn-primary w-100 my-2">
              Login
            </Button>
          </FormGroup>
        </Form>
      </Card>
    </PageWrapper>
  );
}

function setToken(json: { token: string }) {
  localStorage.setItem("token", json.token);
}
