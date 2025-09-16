import { useMemo, useState } from "react";
import ResultDisplay from "./ResultDisplay";
// Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
// Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B.
//  Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo().
// Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay.
//  Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B,
//  а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    if (num1.length && num2.length) return parseInt(num1) + parseInt(num2);
  }, [num1, num2]);

  const fcCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <label>
        <input
          type="number"
          placeholder="num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          placeholder="num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>
      <hr />
      <ResultDisplay result={result} />
      <hr />
      <button onClick={fcCount}>Count</button>
      <div>{count}</div>
    </>
  );
}

export default Calculator;
