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
    <nav className="px-0 py-0">
      <ul className="flex flex-wrap gap-1 items-center m-0 p-0 list-none">
        {itemsForNav.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                [
                  "inline-block px-4 py-3 text-base font-medium transition-all duration-200 ease-in-out",

                  "text-slate-700 dark:text-slate-200",
                  "hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-md",

                  isActive && item.path === "/"
                    ? "bg-blue-600 text-white rounded-md shadow-md shadow-blue-500/50 dark:shadow-blue-700/50"
                    : "",

                  isActive && item.path !== "/"
                    ? "text-blue-600 dark:text-blue-400"
                    : "",
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

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-99 bg-white shadow-md dark:bg-slate-900">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l-2 5h4l-2-5zM12 22v-8h-4l-2 8h8l-2-8h-4zM20 10l-2 4h4l-2-4zM4 10l2 4h-4l2-4z" />
              </svg>
            </span>
            Медична клініка
          </NavLink>
        </div>

        <div className="hidden md:block">
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
