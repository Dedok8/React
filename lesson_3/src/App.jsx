import "./App.css";
import styles from "./components/style/mainBlock.module.css";
import MainBlock from "./components/MainBlock";
import ConversionSm from "./components/ConversionSm";
import Temperature from "./components/Temperature";
import Sapper from "./components/sapper";
import ListSportsmens from "./components/ListSportsmens";
import PairsList from "./components/PairsList";

const gameObjField = [
  {
    id: 1,
    mine: 0,
    isOpen: false,
  },
  {
    id: 2,
    mine: 1,
    isOpen: false,
  },
  {
    id: 3,
    mine: 1,
    isOpen: false,
  },
  {
    id: 4,
    mine: 0,
    isOpen: false,
  },
];

function App() {
  return (
    <>
      <div className={styles.container}>
        <MainBlock title="Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.">
          <ConversionSm />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock
          title="Задача 2. З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:"
          description={
            " менше нуля – білий, від 0 до 10 – синій, від 11 до 22 – зелений, вище 22 – червоний"
          }
        >
          <Temperature />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock
          title="Однорядковий сапер"
          description={
            "Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки."
          }
        >
          <Sapper gameObjField={gameObjField} />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock
          title="Задача 5"
          description={
            "Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список."
          }
        >
          <ListSportsmens />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock
          title="Задача 6. Пари для танців"
          description={
            " Поступово вибираємо хлопця, дівчину і додаємо у обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.  Якщо не вистачає хлопців або дівчат вибір також блокується."
          }
        >
          <PairsList />
        </MainBlock>
      </div>
    </>
  );
}

export default App;
