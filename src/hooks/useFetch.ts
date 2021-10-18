import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import getToken from "../utilities/getToken";

interface useFetchData<T> {
  loading: boolean;
  data: T | null;
}

export default function useFetch<T>(url: string): useFetchData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const res = await fetch(url, {
        headers: { Authorization: getToken() },
      });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        console.log(res);
        if (res.status === 403) {
          history.push("/login");
        }
      }

      setLoading(false);
    }
    fetchData();
  }, [url, history]);

  return { loading, data };
}
