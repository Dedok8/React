export default {
  pages: {
    home: "/",
    teachers: {
      index: "/teachers",
      add: "/teachers/new",
      edit: (id) => `/teachers/${id}/edit`,
      detail: (id) => `/teachers/${id}`,
    },
    meetings: "/meetings",
    aboutApp: "/about-app",
    aboutDev: "/about-dev",
  },
  navigate: {
    home: "/",
    teachers: {
      index: "/teachers",

      add: "/teachers/new",
      edit: (id) => `/teachers/${id}`,
      detail: (id) => `/teachers/${id}`,
    },
    meetings: "/meetings",
    aboutApp: "/about-app",
    aboutDev: "/about-dev",
  },
};
