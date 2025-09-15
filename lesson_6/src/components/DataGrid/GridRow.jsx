// Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
// DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
//  GridRow (обгорнутий у React.memo) відображає один рядок даних.
//  Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
// Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
// Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів,
//  які передаються до дочірніх компонентів.
//  Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.

import { memo } from "react";
import styles from "./css/dataGrid.module.css";

function GridRow({ user }) {
  console.log("user render", user.id);

  return (
    <ul className={styles["userContainerItem"]}>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.position}</li>
      <li>{user.phone}</li>
      <li>{user.country}</li>
    </ul>
  );
}

export default memo(GridRow);
