import { routes } from "@/routes/route";
import { NavLink } from "react-router";
import "@/scss/navBar.scss";
import "@/scss/themeBtn.scss";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function NavBar() {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <nav className="menu">
      <ul className="menu__list">
        {routes[0].children.map((el, i) => (
          <li key={i} className="menu__item">
            <NavLink
              to={el.path || "/"}
              end={el.index}
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
            >
              {el.handle?.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          className={`theme-btn ${theme}`}
          onClick={handleTheme}
        >
          <span className="icon">{theme === "light" ? "🌙" : "☀️"}</span>
          <span className="text">
            {theme === "light" ? "Темна тема" : "Світла тема"}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
