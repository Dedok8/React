import { useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hook/useFetch";
import frontRoutes from "../../routes/frontRoutes";
import styles from "./css/addTeaher.module.css";

function AddTeacher() {
  const { loading, error, addTeacher } = useFetch();
  const navigate = useNavigate();
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    photo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeacher(newTeacher);
    setNewTeacher({ name: "", subject: "", photo: "" });
    navigate(frontRoutes.navigate.teachers.index);
  };

  if (loading) return <div>Додаємо вчителів...</div>;
  else if (error) return <div>{error}</div>;

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>
        <input
          type="text"
          placeholder="Введіть ім'я"
          value={newTeacher.name}
          required
          onChange={(e) =>
            setNewTeacher((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Введіть предмет"
          value={newTeacher.subject}
          required
          onChange={(e) =>
            setNewTeacher((prev) => ({ ...prev, subject: e.target.value }))
          }
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Надішліть силку на фото"
          value={newTeacher.photo}
          onChange={(e) =>
            setNewTeacher((prev) => ({ ...prev, photo: e.target.value }))
          }
        />
      </label>

      <div className={styles.btnContainer}>
        <button type="submit">Додати вчителя</button>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    </form>
  );
}

export default AddTeacher;
