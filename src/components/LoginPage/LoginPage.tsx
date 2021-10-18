import React, { useState } from "react";
import { Alert, Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { LOGIN_URL } from "../../constraints/urls";
import useSubmit from "../../hooks/useSubmit";
import LoadingSpinner from "../shared/LoadingSpinner";

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
    <Form onSubmit={(e) => handleSubmit(e, { password: password })}>
      <FormGroup>
        {success === false && (
          <Alert variant="warning">Incorrect password!</Alert>
        )}
        <FormLabel>Password</FormLabel>
        <input
          className="form-control"
          name="password"
          onChange={handleChange}
        />
        <Button type="submit" className="btn-primary">
          Login
        </Button>
      </FormGroup>
    </Form>
  );
}

function setToken(json: { token: string }) {
  localStorage.setItem("token", json.token);
}
