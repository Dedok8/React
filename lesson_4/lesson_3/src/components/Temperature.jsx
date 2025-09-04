import { useState } from "react";
import styles from "./style/temperature.module.css";

function Temperature() {
  const [temp, setTemp] = useState("");
  const [backColor, setBackColor] = useState("");

  const getColor = (el) => {
    if (el === "") {
      setBackColor("");
    } else if (el <= 0) {
      setBackColor("#D3D3D3");
    } else if (el > 0 && el <= 10) {
      setBackColor("blue");
    } else if (el >= 11 && el <= 22) {
      setBackColor("green");
    } else {
      setBackColor("red");
    }
  };

  const handleColor = (e) => {
    const value = e.target.value;
    setTemp(value);
    getColor(value === "" ? "" : Number(value));
  };

  return (
    <>
      <label>
        <input
          type="number"
          placeholder="Введіть температуру"
          value={temp}
          onChange={handleColor}
        />
      </label>
      <div className={styles.divCenter}>
        <div
          // className={backColorStyle}
          style={{
            backgroundColor: backColor,
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
    </>
  );
}

export default Temperature;
