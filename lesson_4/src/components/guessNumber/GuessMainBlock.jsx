import { useState } from 'react';

function GuessMainBlock({ name, onMove, disabled, guessedNumber }) {
  const [digit, setDigit] = useState('');

  const handleClick = () => {
    const num = Number(digit);
    if (digit === '' || isNaN(num) || num < 0 || num > 9) return;
    onMove(num);
    setDigit('');
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h3>{name}</h3>
      <input
        type="number"
        min="0"
        max="9"
        value={digit}
        onChange={(e) => setDigit(e.target.value)}
        disabled={disabled}
      />
      <button onClick={handleClick} disabled={disabled || digit === ''}>
        Зробити хід
      </button>
      <p>Вгадані числа: {guessedNumber.length ? guessedNumber.join(', ') : 'немає'}</p>
    </div>
  );
}

export default GuessMainBlock;
