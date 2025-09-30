import { useLocation, useNavigate } from "react-router";
import TeachersCard from "../teachersComponent/components/TeachersCard.jsx";
import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch.jsx";

function Meetings() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data: teachersList = [], fetchTeacher, loading, error } = useFetch();
  const [idTeacher, setIdTeacher] = useState([]);

  useEffect(() => {
    fetchTeacher();
    if (state?.idTeacher) {
      setIdTeacher(state.idTeacher);
      localStorage.setItem("selectTeachersId", JSON.stringify(state.idTeacher));
    } else {
      const save = localStorage.getItem("selectTeachersId");
      if (save) setIdTeacher(JSON.parse(save));
    }
  }, [state, fetchTeacher]);

  const teachersListId = teachersList.filter((teacher) =>
    idTeacher.includes(String(teacher.id))
  );

  let content;

  if (loading) return <div>Підтягуемо вчителів</div>;
  else if (error) return <div>{error}</div>;

  if (teachersListId.length > 0)
    content = (
      <div>
        {teachersListId.map((teacher) => (
          <TeachersCard teachers={teacher} key={teacher.id} />
        ))}
      </div>
    );
  else content = <h2>Вчителів нема</h2>;
  return (
    <div>
      {content}
      <div>
        <button type="button" onClick={() => navigate(-1)}>
          Назад до вибору вчителів
        </button>
      </div>
    </div>
  );
}

export default Meetings;
