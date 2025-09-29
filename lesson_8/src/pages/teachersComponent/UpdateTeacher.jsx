import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../hook/useFetch";

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
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTeacher(id, editForm);
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Зберегти зміни</button>
      <button type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </form>
  );
}

export default UpdateTeacher;
