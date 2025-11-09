import { routes } from "@/app/router/routes";
import getMenuForRoutes from "@/shared/utils/getMenuforRoutes";
import { NavLink } from "react-router";

function Header() {
  const itemsForMainMenu = getMenuForRoutes(routes, "");
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
      <nav className="container mx-auto px-6">
        <ul className="flex gap-1">
          {itemsForMainMenu.map((route, i) => (
            <li key={i}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `block px-6 py-4 text-white font-medium transition-all duration-200 border-b-4 ${
                    isActive
                      ? "border-white bg-white/20"
                      : "border-transparent hover:bg-white/10 hover:border-white/50"
                  }`
                }
              >
                <span>{route.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
