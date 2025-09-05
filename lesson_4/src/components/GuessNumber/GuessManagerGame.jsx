// Задача. Гра “Вгадай число”. Правила гри:
// 1) комп”ютер генерує трицифрове число;
// 2) кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”)).
// 3) якщо цифру вгадано, вона відображаться у полі гри “Число”;
// 4) програє той, хто вгадав останню цифру.

// Бажано відображати біля області кожного гравця цифри, які він вгадав

import { useState } from 'react';
import GuessMainBlock from './GuessMainBlock';

function GuessManagerGame() {
  const [randomNumber] = useState(() =>
    String(Math.floor(Math.random() * 900 + 100))
      .split('')
      .map(Number),
  );
  const [revealed, setRevealed] = useState(Array(3).fill(null));
  const [guess, setGuess] = useState({ 1: [], 2: [] });
  const [usedDigit, setUsedDigit] = useState([]);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  const [message, setMessage] = useState('');

  const handleMove = (digit) => {
    if (usedDigit.includes(digit)) {
      setMessage('Це число вже використовувалось');
      return;
    }

    setUsedDigit([...usedDigit, digit]);
    // ==========================================================
    const newRevealed = [...revealed];
    let correctGuess = false;

    randomNumber.forEach((num, ind) => {
      if (num === digit) {
        newRevealed[ind] = digit;
        correctGuess = true;
      }
    });

    setRevealed(newRevealed);

    // ==========================================================

    if (correctGuess) {
      setGuess((prev) => ({ ...prev, [turn]: [...prev[turn], digit] }));

      if (newRevealed.every((el) => el !== null)) {
        setWinner(turn);
        setMessage(`Гравець ${turn} вгадав останню цифру і ВИГРАВ!`);
        return;
      }
    }

    setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
    setMessage('');
  };

  return (
    <div>
      <h2>Число</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {revealed.map((el, ind) => (
          <div
            key={ind}
            style={{
              width: '40px',
              height: '40px',
              border: '1px solid black',
              textAlign: 'center',
              fontSize: '20px',
            }}
          >
            {el !== null ? el : ''}
          </div>
        ))}
      </div>
      {message && <p> {message}</p>}

      {winner ? (
        <h2>Гра закінчена! Переміг Гравець {winner}</h2>
      ) : (
        <>
          <GuessMainBlock
            name="Гравець 1"
            onMove={handleMove}
            disabled={turn !== 1}
            guessedNumber={guess[1]}
          />
          <GuessMainBlock
            name="Гравець 2"
            onMove={handleMove}
            disabled={turn !== 2}
            guessedNumber={guess[2]}
          />
        </>
      )}
    </div>
  );
}

export default GuessManagerGame;
