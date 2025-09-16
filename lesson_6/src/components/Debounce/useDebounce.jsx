// Задача 4. useDebounce – відкладений виклик функції
// Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах.
// Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
// Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу,
// а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.

import { useCallback, useEffect, useState } from "react";

function useDebounce(initialValue = "", delay = 500) {
  const [val, setVal] = useState(initialValue);
  const [debounceVal, setDebounceVal] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setVal(e.target.value);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => clearTimeout(handler);
  }, [val, delay]);

  return { debounceVal, handleChange };
}

export default useDebounce;
