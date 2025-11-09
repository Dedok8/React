const getMenuForRoutes = (routesList, basePath) => {
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
        ...getMenuForRoutes(
          route.children,
          basePath ? basePath + route.path + "/" : basePath + route.path
        )
      );
    }
  });

  return res;
};

export default getMenuForRoutes;
