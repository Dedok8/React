import styles from './google.css/CardItem.module.css'

function CardItem({title, imgSrc, link}) {


  return ( 
    <>
      <div>
        <div className={styles['card-container']}>
          <a href={link}>
            <div className={styles['card-image-wrapper']}>
              <img src={imgSrc} alt="Icon" className={styles['card-image']}/>
            </div>
          </a>
          <h2 className={styles['card-title']}>{title}</h2>
        </div>
      </div>
    </>
  );
}

export default CardItem;