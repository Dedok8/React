import { NavLink } from "react-router";
import { routes } from "@/routes/routes";

function NavBar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex space-x-6 py-4">
          {routes[0].children.map((navEl, i) => (
            <li key={i}>
              <NavLink
                to={navEl.path || "/"}
                end={navEl.index}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-indigo-600 font-semibold"
                      : "hover:bg-indigo-500 hover:text-white"
                  }`
                }
              >
                {navEl.handle?.title || "No title"}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
