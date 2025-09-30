import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { Link, useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import TeachersCard from "../teachersComponent/components/TeachersCard";
import styles from "./css/teacherList.module.css";

function TeachersList() {
  const navigate = useNavigate();
  const {
    data: teachersList = [],
    loading,
    error,
    fetchTeacher,
    deleteTeacher,
  } = useFetch();
  const [selectTeachersId, setSelectedTeachersId] = useState(() => {
    const storage = localStorage.getItem("selectTeachersId");
    return storage ? JSON.parse(storage) : [];
  });
  useEffect(() => {
    fetchTeacher();
  }, [fetchTeacher]);

  useEffect(() => {
    localStorage.setItem("selectTeachersId", JSON.stringify(selectTeachersId));
  }, [selectTeachersId]);

  const goToMeeting = () => {
    navigate(frontRoutes.navigate.meetings, {
      state: {
        // teachers: teachersList.filter((teacher) =>
        //   selectTeachersId.includes(String(teacher.id))
        // ),
        id: selectTeachersId,
      },
    });
  };

  const onSelect = (id) => {
    const idStr = String(id);
    if (selectTeachersId.includes(idStr))
      setSelectedTeachersId((prev) => prev.filter((tId) => tId !== idStr));
    else setSelectedTeachersId((prev) => [...prev, idStr]);
  };

  const handleDeleteteacher = async (id) => {
    await deleteTeacher(id);
    setSelectedTeachersId((prev) => prev.filter((TId) => TId !== String(id)));

    const saved = localStorage.getItem("meetingTeachers");
    if (saved) {
      const parsed = JSON.parse(saved).filter(
        (teacher) => String(teacher.id) !== String(id)
      );
      localStorage.setItem("meetingTeachers", JSON.stringify(parsed));
    }
  };

  let content;
  if (loading) content = <h2>Підвантажуємо вчителів</h2>;
  else if (error) content = <h2>Error</h2>;
  else {
    content = (
      <div className={styles.container}>
        {teachersList.map((teacher) => (
          <TeachersCard
            key={teacher.id}
            teachers={teacher}
            onSelect={onSelect}
            isSelected={selectTeachersId.includes(String(teacher.id))}
            onDelete={handleDeleteteacher}
            updateTeacher={(id) => navigate(`/teachers/${id}/edit`)}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <Link to={frontRoutes.pages.teachers.add}>
        <button>Додати вчителя</button>
      </Link>

      <hr />
      <button onClick={goToMeeting} disabled={selectTeachersId.length === 0}>
        Викликати {selectTeachersId.length} вчителів на збори
      </button>
      {content}
    </div>
  );
}

export default TeachersList;
