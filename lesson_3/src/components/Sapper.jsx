// Задача 4. Однорядковий сапер.
// Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути).
// Спочатку клітинки сірі.
// При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим.
// Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.

import { useState } from "react";
// import gameObjField from "../App";
import styles from "./style/sapper.module.css";

function Sapper({ gameObjField }) {
  const [gameField, setGameObjField] = useState(gameObjField);

  const cellHandlerClick = (objId) => {
    setGameObjField(
      gameField.map((cell) =>
        cell.id === objId ? { ...cell, isOpen: true } : cell
      )
    );
  };

  const isCellOpen = (objCell) => {
    let styleCell = null;
    if (objCell.isOpen) {
      if (objCell.mine === 1) styleCell = { background: "red" };
      else styleCell = { background: "green" };
    } else {
      styleCell = { background: "lightGray" };
    }
    return styleCell;
  };

  return (
    <>
      <table className={styles.tableCenter}>
        <tbody>
          <tr>
            {gameField.map((cell) => (
              <td
                key={cell.id}
                onClick={() => cellHandlerClick(cell.id)}
                style={isCellOpen(cell)}
                className={styles.tableCell}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Sapper;
