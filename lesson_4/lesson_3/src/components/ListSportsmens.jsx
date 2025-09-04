import { useState } from "react";
import { ArrowRight, ArrowLeft } from "./arrows.jsx";
import styles from "./style/listSportsmens.module.css";

const athletesData = [
  "Іван Іванов",
  "Петро Петренко",
  "Олег Сидоренко",
  "Михайло Коваленко",
  "Андрій Шевченко",
];
function ListSportsmens() {
  const [available, setAvailable] = useState(athletesData);
  const [selected, setSelected] = useState([]);

  const moveToSelected = (name) => {
    setAvailable(available.filter((findName) => findName !== name));
    setSelected([...selected, name]);
  };

  const moveToAvailable = (name) => {
    setSelected(selected.filter((findName) => findName !== name));
    setAvailable([...available, name]);
  };

  return (
    <div>
      <p className={styles.listMainTitle}>Список всіх спортсменів</p>
      <div className={styles.listContainer}>
        <div>
          <h2 className={styles.listTitleGreen}>Загальний список</h2>
          <ul className={styles.listMain}>
            {available.map((athlete) => (
              <li key={athlete}>
                {athlete}{" "}
                <button
                  style={{
                    backgroundColor: "green",
                    padding: "6px",
                    borderRadius: "50%",
                  }}
                  onClick={() => moveToSelected(athlete)}
                >
                  <ArrowRight />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={styles.listTitleRed}>Обрані для змагання</h2>
          <ul className={styles.listMain}>
            {selected.map((athlete) => (
              <li key={athlete}>
                {athlete}{" "}
                <button
                  style={{
                    backgroundColor: "red",
                    padding: "6px",
                    borderRadius: "50%",
                  }}
                  onClick={() => moveToAvailable(athlete)}
                >
                  <ArrowLeft />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListSportsmens;
