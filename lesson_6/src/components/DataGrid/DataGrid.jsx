// Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
// DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
//  GridRow (обгорнутий у React.memo) відображає один рядок даних.

//  Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.

// Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.

// Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів,
//  які передаються до дочірніх компонентів.

//  Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.

import { useCallback, useDeferredValue, useMemo, useState } from "react";
import { gridData } from "../../data/GridData";
import GridRow from "./GridRow";
import styles from "./css/dataGrid.module.css";

function DataGrid() {
  const [data] = useState(gridData);
  const [filterQuery, setFilterQuery] = useState(""); //текст з поля вводу, за яким буде фільтрація
  const [sortColumn, setSortColumn] = useState(null); //за якою колонкою зараз сортуємо
  const [sortDirection, setSortDirection] = useState("asc"); //напрям сортування

  const deferredFilter = useDeferredValue(filterQuery);

  const filteredAndSortedData = useMemo(() => {
    let copyDate = [...data];

    //фільтрація
    if (deferredFilter.trim()) {
      copyDate = copyDate.filter((el) =>
        el.name.toLowerCase().includes(deferredFilter.toLowerCase())
      );
    }

    // сортування

    if (sortColumn) {
      copyDate.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn])
          return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn])
          return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return copyDate;
  }, [data, deferredFilter, sortColumn, sortDirection]);

  // функція обробник
  const handleSort = useCallback(
    (column) => {
      if (sortColumn === column) {
        setSortDirection((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    },
    [sortColumn]
  );

  return (
    <>
      <label>
        <input
          type="text"
          placeholder="пошук за іменем"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </label>
      <ul className={styles["userContainer"]}>
        <li onClick={() => handleSort("id")}>Id</li>
        <li onClick={() => handleSort("name")}>Name</li>
        <li onClick={() => handleSort("email")}>Email</li>
        <li onClick={() => handleSort("position")}>Position</li>
        <li onClick={() => handleSort("country")}>Country</li>
      </ul>

      <div>
        {filteredAndSortedData.map((el) => (
          <GridRow key={el.id} user={el} />
        ))}
      </div>
    </>
  );
}

export default DataGrid;
