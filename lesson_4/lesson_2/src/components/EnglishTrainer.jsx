import { useState } from "react";

// Задача 3. Елемент тренажера англійської.
//  Виводимо зображення елемента і слово. Користувач вводить відповідь.
//   Якщо вірно – відтворюємо фразу «Добре. Молодець!»
//   (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз»
//    (і додаємо червону рамку).

function EnglishTrainer() {
  const [currentWords, setCurrentWords] = useState(0);
  const [userWords, setUserWords] = useState("");
  const [message, setMessage] = useState("");
  const [isCurrent, setIsCurrent] = useState(null);

  const words = [
    {
      id: 1,
      imgSrc: "https://cdn-icons-png.flaticon.com/512/938/938083.png",
      ua: "морозиво",
      en: ["ice cream"],
    },
    {
      id: 2,
      imgSrc: "https://static.thenounproject.com/png/1147545-512.png",
      ua: "кіт",
      en: ["cat", "kitty"],
    },
    {
      id: 3,
      imgSrc: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
      ua: "яблуко",
      en: ["apple"],
    },
    {
      id: 4,
      imgSrc: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
      ua: "книга",
      en: ["book"],
    },
    {
      id: 5,
      imgSrc: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      ua: "собака",
      en: ["dog", "puppy"],
    },
  ];

  const currentWord = words[currentWords];

  const nextWord = () => {
    setUserWords("");
    setMessage("");
    setCurrentWords((prevWord) => (prevWord + 1) % words.length);
  };

  const checkCurrentAnswer = () => {
    const isCorrectUserInput = userWords.trim().toLowerCase();
    const isRight = currentWord.en.some(
      (word) => word.toLowerCase() === isCorrectUserInput
    );
    if (isRight) {
      setMessage("Молодець!");
      setIsCurrent(true);
    } else {
      setMessage("Невірно");
      setIsCurrent(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          border:
            isCurrent === null
              ? "8px solid transparent "
              : isCurrent
              ? "8px solid green"
              : "8px solid red",
        }}
      >
        <img src={currentWord.imgSrc} alt="#" style={{ width: 100 }} />
      </div>
      <div>{currentWord.ua}</div>
      <label>
        <input
          type="text"
          value={userWords}
          onChange={(e) => setUserWords(e.target.value)}
        />
      </label>
      <p>{message}</p>
      <div>
        <button onClick={nextWord}>Наступне слово</button>
        <button onClick={checkCurrentAnswer}>Перевірити</button>
      </div>
    </div>
  );
}

export default EnglishTrainer;
