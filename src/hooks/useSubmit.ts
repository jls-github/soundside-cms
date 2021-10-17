import { useState } from "react";

interface useSubmitData {
  loading: boolean;
  success: boolean | null;
  handleSubmit: Function;
}

export default function useSubmit<T>(url: string, method: string): useSubmitData {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent, data: T): void {
    e.preventDefault();
    setLoading(true);
    console.log(method)
    console.log(url)
    fetch(url, {
      method: method,
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
        setSuccess(false);
      }
      setLoading(false);
    });
  }

  return { handleSubmit, success, loading };
}
