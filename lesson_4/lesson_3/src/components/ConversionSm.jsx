// Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.

import { useState } from "react";

function ConversionSm() {
  const [sm, setSm] = useState("");

  const meters = sm ? (sm / 100).toFixed(2) : 0;
  const kilometers = sm ? (sm / 100000).toFixed(5) : 0;

  return (
    <>
      <label>
        Введіть кількіть сантиметрів
        <input
          type="number"
          value={sm}
          onChange={(e) => setSm(e.target.value)}
          placeholder="Введіть кількіть сантиметрів "
        />
      </label>
      <p>Кількість метрів: {meters} </p>
      <p>Кількість кілометрів:{kilometers} </p>
    </>
  );
}

export default ConversionSm;
