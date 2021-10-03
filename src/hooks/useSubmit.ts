import { useState } from "react";

interface useSubmitData {
  loading: boolean;
  success: boolean | null;
  handleSubmit: Function;
}

export default function useSubmit<T>(url: string): useSubmitData {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent, data: T): void {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "test_password",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
      } else {
        // TODO: handle errors
        console.log(res);
      }
      setLoading(false);
    });
  }

  return { handleSubmit, success, loading };
}
