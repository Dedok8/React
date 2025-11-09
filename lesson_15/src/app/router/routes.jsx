import AddPage from "@/pages/AddPage";
import DreamDetailPage from "@/pages/DreamDetailPage";
import DreamListPage from "@/pages/DreamListPage";
import EditPage from "@/pages/EditPage";
import Home from "@/pages/HomePage";
import Page404 from "@/pages/Page404";
import { frontRoutes } from "@/shared/config/frontRoutes";
import MainLayout from "@/shared/ui/MainLayout/MainLayout";

export const routes = [
  {
    path: frontRoutes.pages.home,
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: { title: "Home" },
      },

      {
        path: frontRoutes.pages.addDream,
        element: <AddPage />,
        meta: { title: "Add Dream" },
      },

      {
        path: "dream",
        children: [
          {
            index: true,
            element: <DreamListPage />,
            meta: { title: "Your Dreams" },
          },
          {
            path: "new",
            element: <AddPage />,
          },
          {
            path: ":id",
            element: <DreamDetailPage />,
          },
          {
            path: ":id/edit",
            element: <EditPage />,
          },
        ],
      },
    ],
  },
];
