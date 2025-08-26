// Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого
//  (дані не обов’язково повинні співпадати)
import image from "../assets/image.svg";
import styles from "../components/style/siteDomen.module.css";

const arr = [
  {
    domain: "W3SchoolsUA",
    title: "React Підручник — W3Schools українською",
    url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
    description:
      "React — це бібліотека JavaScript для створення інтерфейсів користувача. React дозволяє нам...",
  },
  {
    domain: "React",
    title: "Посібник: знайомство з React",
    url: "https://react.dev/learn",
    description:
      "Даний посібник не потребує попереднього ознайомлення з React. Перед початком роботи...",
  },
  {
    domain: "Coursera",
    title: "React Старт — W3Schools українською",
    url: "https://www.coursera.org/",
    description:
      "Підручник React. Запустити програму React. Зміни програму React. Що далі?",
  },
];

const SiteDomen = () => {
  return (
    <div>
      {arr.map((el, index) => (
        <ul key={index}>
          <li>
            <a href={el.url} target="_blank" className={styles.linkContainer}>
              <div className={styles.mainHead}>
                <img src={image} alt="#" />
                <div className={styles.mainInfo}>
                  <p>{el.domain}</p>
                  <span>{el.url}</span>
                </div>
              </div>
              <div className={styles.mainBody}>
                <h2 className={styles.bodyTitle}>{el.title}</h2>
                <p>{el.description}</p>
              </div>
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SiteDomen;
