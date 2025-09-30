import { Link } from "react-router";
import frontRoutes from "../../routes/frontRoutes";

function Home() {
  return (
    <>
      <h1>Ласкаво просимо в додаток "Вчителі"</h1>
      <p>
        Цей додаток дорпоможе вам керувати інформацією про вчителів, викликати
        ії на збори та дізнаватися про розробника
      </p>
      <div>
        <Link to={frontRoutes.pages.teachers.index}>
          <button>Переглянути вчителів</button>
        </Link>

        <Link to={frontRoutes.pages.meetings}>
          <button>Переглянути список для зборів</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
