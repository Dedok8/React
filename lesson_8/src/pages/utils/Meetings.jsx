import { useLocation, useNavigate } from "react-router";
import TeachersCard from "../teachersComponent/components/TeachersCard.jsx";
import { useEffect } from "react";
import useFetch from "../../hook/useFetch.jsx";

function Meetings() {
  const navigate = useNavigate();
  const { data: teachersList = [], fetchTeacher, loading, error } = useFetch();

  useEffect(() => {
    fetchTeacher(); // подгружаем всех учителей с бэка
  }, [fetchTeacher]);

  if (loading) return <div>Підтягуємо вчителів...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {teachersList.length > 0 ? (
        <div>
          {teachersList.map((teacher) => (
            <TeachersCard teachers={teacher} key={teacher.id} />
          ))}
        </div>
      ) : (
        <h2>Вчителів нема</h2>
      )}

      <div style={{ marginTop: "20px" }}>
        <button type="button" onClick={() => navigate(-1)}>
          Назад до вибору вчителів
        </button>
      </div>
    </div>
  );
}

export default Meetings;
