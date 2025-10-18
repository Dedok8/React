import { createBrowserRouter } from "react-router";
import frontRoutes from "./frontRoutes";
import MainLayout from "../layouts/MainLayout";

import Page404 from "../pages/Page404";
import Home from "@/pages/Home";
import ProductListPage from "@/pages/ProductListPage";
import PostListPage from "@/pages/PostLIstPage";

export const routes = [
  {
    path: frontRoutes.pages.home,
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          title: "Home",
        },
      },
      {
        path: frontRoutes.pages.productList,
        element: <ProductListPage />,
        handle: {
          title: "Product list",
        },
      },
      {
        path: frontRoutes.pages.postList,
        element: <PostListPage />,
        handle: {
          title: "Post list",
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
