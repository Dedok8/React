import { useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hook/useFetch";
import frontRoutes from "../../routes/frontRoutes";

function AddTeacher() {
  const { addTeacher } = useFetch();
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Введіть ім'я"
          value={newTeacher.name}
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

      <button type="submit">Додати вчителя</button>
      <button onClick={() => navigate(-1)}>Назад</button>
    </form>
  );
}

export default AddTeacher;
