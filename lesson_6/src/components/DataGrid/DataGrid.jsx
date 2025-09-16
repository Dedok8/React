// Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI
// Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
// DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
// GridRow (обгорнутий у React.memo) відображає один рядок даних.
// Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
// Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
// Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів,
//  які передаються до дочірніх компонентів.
// Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.

import { useState } from "react";
import { dataGrid } from "../../data/dataGrid.js";

function DataGrid() {
  const [data, setData] = useState(dataGrid);
  const [filterQuery, setFilterQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  return <></>;
}

export default DataGrid;
