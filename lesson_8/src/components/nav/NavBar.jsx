import { NavLink } from "react-router";
import styles from "./css/navBar.module.css";
import frontRoutes from "../../routes/frontRoutes";

function NavBar() {
  return (
    <nav>
      <NavLink
        to={frontRoutes.navigate.home}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Головна
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.teachers.index}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Вчителі
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.meetings}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Збори
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.aboutApp}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Про додаток
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.aboutDev}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Про розробника
      </NavLink>
    </nav>
  );
}

export default NavBar;
