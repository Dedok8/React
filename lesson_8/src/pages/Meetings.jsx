import { useLocation } from "react-router";
import TeachersCard from "./teachersComponent/components/TeachersCard.jsx";
import { useEffect, useState } from "react";

function Meetings() {
  const { state } = useLocation();
  const [meetingTeachers, setMeetingTeachers] = useState([]);

  useEffect(() => {
    if (state?.teachers) {
      setMeetingTeachers(state.teachers);
      localStorage.setItem("meetingTeachers", JSON.stringify(state.teachers));
    } else {
      const save = localStorage.getItem("meetingTeachers");
      if (save) setMeetingTeachers(JSON.parse(save));
    }
  }, [state]);

  let content;

  if (meetingTeachers.length > 0)
    content = (
      <div>
        {meetingTeachers.map((teacher) => (
          <TeachersCard teachers={teacher} key={teacher.id} />
        ))}
      </div>
    );
  else content = <h2>Вчителів нема</h2>;
  return <div>{content}</div>;
}

export default Meetings;
