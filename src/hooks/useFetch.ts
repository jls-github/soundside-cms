import { useEffect, useState } from "react";

interface useFetchData<T> {
  loading: boolean;
  data: T | null;
}

export default function useFetch<T>(url: string): useFetchData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const res = await fetch(url, {
        headers: { Authorization: "test_password" },
      });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        console.log(res);
      }

      setLoading(false);
    }
    fetchData();
  }, [url]);  

  return { loading, data };
}
