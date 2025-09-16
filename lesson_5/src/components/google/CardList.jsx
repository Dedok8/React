import { googleIcon } from "../../data/dataGoogleIcon";
import CardItem from './CardItem'
import styles from './google.css/CardList.module.css'


function CardList() {
  return ( 
    <>
      <div className={styles['list-container']}>
        {googleIcon.map((card) => (
            <CardItem key={card.id} {...card}/>
        ))}
      </div>
    </>
  );
}

export default CardList;