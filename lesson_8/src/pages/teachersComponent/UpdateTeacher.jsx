import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../hook/useFetch";
import styles from "./css/updateTeacher.module.css";

function UpdateTeacher() {
  const { id } = useParams();
  const { updateTeacher, getTeacherById } = useFetch();
  const [editForm, setEditForm] = useState({
    name: "",
    subject: "",
    photo: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacher = async () => {
      if (!id) return;
      const teacher = await getTeacherById(Number(id));
      if (teacher) {
        setEditForm({
          name: teacher.name || "",
          subject: teacher.subject || "",
          photo: teacher.photo || "",
        });
      }
    };
    fetchTeacher();
  }, [id, getTeacherById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editForm.name.trim() || !editForm.subject.trim()) {
      alert("Поле не мже бути пустим");
      return;
    }
    await updateTeacher(id, editForm);
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>
        Надайте нове ім'я
        <input
          name="name"
          type="text"
          placeholder="Введіть ім'я вчителя"
          value={editForm.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Надайте новий предмет
        <input
          name="subject"
          type="text"
          placeholder="Введіть предмет"
          value={editForm.subject}
          onChange={handleChange}
        />
      </label>
      <label>
        Надайте нове фото
        <input
          name="photo"
          type="text"
          placeholder="Введіть посилання на фото"
          value={editForm.photo}
          onChange={handleChange}
        />
      </label>
      <div className={styles.btnContainer}>
        <button type="submit">Зберегти зміни</button>
        <button type="button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </form>
  );
}

export default UpdateTeacher;
