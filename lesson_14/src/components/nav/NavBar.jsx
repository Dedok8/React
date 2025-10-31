import { routes } from "@/router/routes";
import { NavLink } from "react-router";

const getTitleForNav = (routesList, basePath) => {
  const res = [];

  routesList.forEach((route) => {
    if (route?.meta?.title) {
      res.push({
        path: route.index ? basePath : basePath + route.path,
        title: route.meta.title,
      });
    }

    if (route.children) {
      res.push(
        ...getTitleForNav(
          route.children,
          basePath ? basePath + route.path + "/" : basePath + route.path
        )
      );
    }
  });

  return res;
};

function NavBar() {
  const itemsForNav = getTitleForNav(routes, "");

  return (
    <nav className="bg-white/60 dark:bg-slate-800/60 px-4 py-3 rounded-md shadow-sm">
      <ul className="flex flex-wrap gap-2 items-center m-0 p-0 list-none">
        {itemsForNav.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                [
                  "inline-block px-3 py-2 text-sm rounded-md transition-colors",
                  "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700",
                  isActive ? "bg-blue-600 text-white shadow" : "bg-transparent",
                ].join(" ")
              }
              end
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
