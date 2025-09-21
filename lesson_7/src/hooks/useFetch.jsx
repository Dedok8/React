// src/hooks/useFetch.js
import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let ignore = false;

    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`Помилка: ${res.status}`);
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
