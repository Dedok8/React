import "./App.css";
import Calculator from "./components/Calc/Calculator1.jsx";
import MainBlock from "./components/MainBlock/MainBlock.jsx";
import styles from "./components/MainBlock/mainBlock.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <MainBlock
          title="Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo"
          description={
            " Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B. Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo(). Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B)."
          }
        >
          <Calculator />
        </MainBlock>
      </div>
    </>
  );
}

export default App;
