import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import PostsPage from "@/pages/PostsPage";
import InfinitePostsPage from "@/pages/PostsPage/InfinitePostsPage";

import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        handler: {
          title: "Home",
        },
      },
      {
        path: "posts",
        Component: PostsPage,
        handler: {
          title: "Posts",
        },
      },
      {
        path: "infinite posts",
        Component: InfinitePostsPage,
        handler: {
          title: "Infinite posts",
        },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
