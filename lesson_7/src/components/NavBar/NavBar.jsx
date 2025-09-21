import { NavLink } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import styles from "./css/navBar.module.css";

function Navbar() {
  return (
    <nav>
      <NavLink
        to={frontRoutes.pages.home}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Головна
      </NavLink>
      <NavLink
        to={frontRoutes.pages.products.index}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Магазин
      </NavLink>
      <NavLink
        to={frontRoutes.pages.paymentRules}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Правила покупки
      </NavLink>
      <NavLink
        to={frontRoutes.pages.contacts}
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
        }
      >
        Контакти
      </NavLink>
    </nav>
  );
}

export default Navbar;
