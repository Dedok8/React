import MainLayout from "@/layouts/MainLayout";
import Page404 from "@/pages/Page404";
import { createBrowserRouter } from "react-router";
import frontRoutes from "./frontRoutes";
import Home from "@/pages/Home";
import Busses from "@/pages/Buses";
import Hotels from "@/pages/Hotels";
import SelectedPage from "@/pages/SelectedPage";

export const routes = [
  {
    path: frontRoutes.pages.home,
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: frontRoutes.pages.busses,
        element: <Busses />,
        handle: { title: "Busses" },
      },
      {
        path: frontRoutes.pages.hotels,
        element: <Hotels />,
        handle: { title: "Hotels" },
      },
      {
        path: frontRoutes.pages.selectPage,
        element: <SelectedPage />,
        handle: { title: "SelectedPage" },
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
