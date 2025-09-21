import { NavLink } from "react-router";
import frontRoutes from "../../routes/frontRoutes";

function Navbar() {
  return (
    <nav>
      <NavLink
        to={frontRoutes.pages.home}
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Головна |
      </NavLink>
      <NavLink
        to={frontRoutes.pages.products.index}
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Магазин |
      </NavLink>
      <NavLink
        to={frontRoutes.pages.paymentRules}
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Правила покупки |
      </NavLink>
      <NavLink
        to={frontRoutes.pages.contacts}
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Контакти
      </NavLink>
    </nav>
  );
}

export default Navbar;
