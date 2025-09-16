// Створіть компонент-калькулятор,
// який має два незалежні поля вводу: одне для числа A і одне для числа B.
// Також є окремий компонент ResultDisplay, який відображає A + B.
// Обгорніть ResultDisplay у React.memo().
// Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay.
//  Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B,
// а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).`

import { useMemo, useState } from 'react';
import ResultDisplay from './ResultDisplay';

function Calculator() {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [count, setCount] = useState(0);
  const res = useMemo(() => {
    console.log('Обчислення');
    if (numOne.length && numTwo.length) {
      return parseInt(numOne) + parseInt(numTwo);
    }
  }, [numOne, numTwo]);

  const Counter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <label>
          Number 1
          <input
            type="number"
            placeholder="Number 1"
            value={numOne}
            onChange={(e) => setNumOne(e.target.value)}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Number 2"
            value={numTwo}
            onChange={(e) => setNumTwo(e.target.value)}
          />
        </label>
      </div>
      <ResultDisplay res={res} />
      <div>
        <p>{count}</p>
        <button onClick={Counter}>count</button>
      </div>
    </>
  );
}

export default Calculator;
