import "./App.css";
import styles from "./components/style/main.module.css";
import MainBlock from "./components/mainBlock";
import LoginVerification from "./components/LoginVerification";
import TicketManager from "./components/TicketManager/TicketManager";
import EnglishTrainer from "./components/EnglishTrainer";
import MarkList from "./components/markList";
import SiteDomen from "./components/siteDomen";
import Kitchen from "./components/Kitchen";

function App() {
  return (
    <>
      <div className={styles.container}>
        <MainBlock
          title="Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то"
          description={`
          1) якщо логін = Іван – колір повідомлення про помилку синій
          2) якщо хтось інший, то колір повідомлення червоний`}
        >
          <LoginVerification />
        </MainBlock>
      </div>

      <div className={styles.container}>
        <MainBlock
          title="Задача 2. Вибір класу квитка"
          description={`
          1) якщо бізнес – показати газетуконьяк і закуску
          2) якщо економ – показати пиво та чіпси`}
        >
          <TicketManager />
        </MainBlock>
      </div>

      <div className={styles.container}>
        <MainBlock
          title="Задача 3. "
          description={`
          1) Елемент тренажера англійської. Виводимо зображення елемента і слово.
          Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!»
            (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» 
            (і додаємо червону рамку).
        `}
        >
          <EnglishTrainer />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock
          title="Задача 4"
          description="4. Вивести список як маркований список з елементами у форматі (name: salary)"
        >
          <MarkList />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock
          title="Задача 5"
          description=" Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)"
        >
          <SiteDomen />
        </MainBlock>
      </div>

      <div className={styles.container}>
        <MainBlock
          title="Задача 6"
          description="  Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці"
        >
          <Kitchen />
        </MainBlock>
      </div>
    </>
  );
}

export default App;
