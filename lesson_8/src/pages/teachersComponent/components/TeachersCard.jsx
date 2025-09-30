import { useNavigate } from "react-router";
import styles from "./css/teacherCard.module.css";

function TeachersCard({
  teachers,
  isSelected,
  onSelect,
  onDelete,
  updateTeacher,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.imgItem}>
          <img src={teachers.photo} alt="#" />
        </div>
        <div className={styles.info}>
          <h4>{teachers.name}</h4>
          <h5>{teachers.subject}</h5>
        </div>
        <div className={styles.direction}>
          {onSelect ? (
            <button onClick={() => onSelect(teachers.id)}>
              {isSelected ? "Вибрано на збори" : "Вибрати"}
            </button>
          ) : null}
        </div>
      </div>
      <div className={styles.btnContainer}>
        {onDelete && (
          <div>
            <button type="button" onClick={() => onDelete(teachers.id)}>
              Видалити вчителя
            </button>
          </div>
        )}
        {updateTeacher && (
          <div>
            <button
              type="button"
              onClick={() => navigate(`/teachers/${teachers.id}/edit`)}
            >
              Редагувати вчителя
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeachersCard;
