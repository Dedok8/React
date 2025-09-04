// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

import { useState } from "react";
// import smile from "../assets/images.jpg";
import styles from "./style/main.module.css";

function LoginVerification() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");

  const user = {
    currentLogin: "login1",
    currentPassword: 11111,
  };

  const userHandler = () => {
    if (
      login === user.currentLogin &&
      Number(password) === user.currentPassword
    ) {
      setMessage(<img src={smile} alt="smile" />);
    } else if (login === "Ivan") {
      setMessage("Error");
      setMessageColor("blue");
    } else {
      setMessage("Невірний логін або пароль");
      setMessageColor("red");
    }
  };

  return (
    <form className={styles.formContainer}>
      <p>
        Правильний логін та пароль : {user.currentLogin} -{" "}
        {user.currentPassword}
      </p>
      <label>
        Логін:
        <input
          value={login}
          type="text"
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label>
        Пароль:
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <hr />
      <button type="button" onClick={userHandler}>
        Перевірити
      </button>
      <p style={{ color: messageColor }}>{message}</p>
    </form>
  );
}

export default LoginVerification;
