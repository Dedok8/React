// Приклад. Валідація полів. Є два поля. При настененні на кнопку перевіряти чи поле порожнє
// Якщо поле прожнжнє, то ставити туди курсор

import { useRef, useEffect, useState } from "react";

function InputFocus() {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  // const handleClick = () => {
  //   inputRef.current?.focus();
  // };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [message, setMessage] = useState("");

  const btnHandleClick = () => {
    if (!nameRef.current.value) {
      nameRef.current.focus();
      return;
    }

    if (!emailRef.current.value) {
      emailRef.current.focus();
      return;
    }

    setMessage("Всі поля заповнені");
  };

  return (
    <>
      {/* <label>
        <input type="text" placeholder="Введіть текст" ref={inputRef} />
      </label>
      <button onClick={handleClick}> Focus</button> */}

      <label>
        Ім'я
        <input type="text" placeholder="Введіть ім'я" ref={nameRef} />
      </label>

      <label>
        Email
        <input type="email" placeholder="Введіть email" ref={emailRef} />
      </label>

      <button onClick={btnHandleClick}>Перевірити</button>
      <p>{message}</p>
    </>
  );
}

export default InputFocus;
