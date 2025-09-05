import styles from './components/style/mainBlock.module.css';
import MainBlock from './components/MainBlock';
import TodoManager from './components/Todo/TodoManager';
import MessageManager from './components/Massage/MessageManager';
import GuessManagerGame from './components/GuessNumber/GuessManagerGame';

import './App.css';

function App() {
  return (
    <>
      <div className={styles.container}>
        <MainBlock
          title="Задача 1. "
          description={
            ' Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент'
          }
        >
          <TodoManager />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock title="Задача 2. " description={''}>
          <MessageManager />
        </MainBlock>
      </div>
      <div className={styles.container}>
        <MainBlock title="Задача 2. " description={''}>
          <GuessManagerGame />
        </MainBlock>
      </div>
    </>
  );
}

export default App;
