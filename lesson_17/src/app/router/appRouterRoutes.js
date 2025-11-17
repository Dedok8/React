// import { frontRoutes } from '@/shared/config/routes/frontRoutes'

// const pagesList = Object.keys(frontRoutes.pages)

// export const appRouterRoutes = pagesList.map((page) => ({
//   ...frontRoutes.pages[page],
//   lazy: async () => ({
//     Component: (await import(`../../pages/${page}`)).default,
//   }),
// }))

import { frontRoutes } from "@/shared/config/routes/frontRoutes";

const pages = import.meta.glob("../../pages/*.jsx");

const pagesList = Object.keys(frontRoutes.pages);

export const appRouterRoutes = pagesList.map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => {
    const importer = pages[`../../pages/${page}.jsx`];

    if (!importer) {
      throw new Error(`Page "${page}" не знайдена у /pages`);
    }

    return {
      Component: (await importer()).default,
    };
  },
}));
