import { useState } from "react";
import getToken from "../utilities/getToken";

interface useSubmitData {
  loading: boolean;
  success: boolean | null;
  handleSubmit: Function;
}

export default function useSubmit<T>(
  url: string,
  method: string,
  onSubmit?: Function
): useSubmitData {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent, data: T): void {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: method,
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
        if (onSubmit) {
          res.json().then((json) => onSubmit(json));
        }
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
