import './App.css';
import ConvertorMain from './components/convertor/ConvertorMain';
import CardList from './components/google/CardList';

import MainBlock from './components/MainBlockVal/MainBlock';
import styles from './components/MainBlockVal/mainBlock.module.css';

function App() {
  return (
    <>
      <div className={styles[('.containerModification', 'container')]}>
        <MainBlock title="Задача 1. " description={'Картки гугл'}>
          <CardList />
        </MainBlock>
      </div>
      <div className={styles['container']}>
        <MainBlock
          title="Задача 2. "
          description={
            'Конвертер з синхронізацією. При зміні валюти робиться запит для отримання поточного курсу обраної валюти Приклад запиту:https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20220329&json'
          }
        >
          <ConvertorMain />
        </MainBlock>
      </div>
    </>
  );
}

export default App;
