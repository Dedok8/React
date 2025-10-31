import { useEffect, useState } from "react";

function useDebounce(initialValue, delay = 1) {
  const [debounceVal, setDebounceVal] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(initialValue);
    }, delay);
    return () => clearTimeout(handler);
  }, [initialValue, delay]);

  return debounceVal;
}

export default useDebounce;
