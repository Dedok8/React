// Задача 6. Задача. На кухню поступають замовлення.
// Спочатку ми додаємо їх у список “Очікують на виконання”,
// якщо повар береться робити — замовлення переходить у список “Виконуються”,
//  якщо замовлення виконано — переходить у список “Готові до виносу”.
// Якщо натиснути на “Подано” - страва зникає з таблиці

import { useState } from "react";
import styles from "./style/main.module.css";

// Підказка: тут треба зберігати 3 масиви страв ( waitingList, processingList, completedList)
function Kitchen() {
  const [dish, setDish] = useState("");
  const [waitingList, setWaitingList] = useState([]);
  const [processingList, setProcessingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const menu = [
    { id: 1, name: "Борщ", price: 80 },
    { id: 2, name: "Вареники", price: 70 },
    { id: 3, name: "Салат Цезар", price: 90 },
    { id: 4, name: "Пельмені", price: 75 },
    { id: 5, name: "Котлета по-київськи", price: 120 },
    { id: 6, name: "Суп-пюре", price: 65 },
    { id: 7, name: "Сирники", price: 50 },
    { id: 8, name: "Крабовий салат", price: 60 },
    { id: 9, name: "Гуляш", price: 110 },
    { id: 10, name: "Піца Маргарита", price: 130 },
  ];

  const addDish = () => {
    const findDish = menu.find(
      (el) => el.name.toLowerCase() === dish.toLowerCase()
    );

    if (findDish) {
      setWaitingList([...waitingList, findDish]);
      setDish();
    } else {
      alert(`Такої страви нема`);
    }
  };

  const isprocessingList = (id) => {
    const item = waitingList.find((el) => el.id === id);
    setWaitingList(waitingList.filter((el) => el.id !== id));
    setProcessingList([...processingList, item]);
  };

  const isCompletedList = (id) => {
    const item = processingList.find((el) => el.id === id);
    setProcessingList(processingList.filter((el) => el.id !== id));
    setCompletedList([...completedList, item]);
  };
  const removeDish = (id) => {
    setCompletedList(completedList.filter((el) => el.id !== id));
  };

  return (
    <>
      {menu.map((dish) => (
        <ul key={dish.id} lassName={styles.menuContainer}>
          <li>
            {dish.name} {dish.price} грн
          </li>
        </ul>
      ))}
      <label>
        <input
          type="text"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          placeholder="Введіть ваше блюдо"
        />
      </label>
      <button onClick={addDish}>Додати</button>
      <div className={styles.listKitchen}>
        <ul>
          <h4>Очікують виконання</h4>
          {waitingList.map((el) => (
            <li key={el.id}>
              {el.name} {el.price} грн
              <button onClick={() => isprocessingList(el.id)}>
                Перейти до виконання
              </button>
            </li>
          ))}
        </ul>
        <ul>
          <h4>Виконуються</h4>
          {processingList.map((el) => (
            <li key={el.id}>
              {el.name} {el.price} грн
              <button onClick={() => isCompletedList(el.id)}>
                Перейти до готовки
              </button>
            </li>
          ))}
        </ul>
        <ul>
          <h4>Готово</h4>
          {completedList.map((el) => (
            <li key={el.id}>
              {el.name} {el.price} грн
              <button onClick={() => removeDish(el.id)}>Готово</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Kitchen;
