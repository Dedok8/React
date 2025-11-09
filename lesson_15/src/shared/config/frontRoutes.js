export const frontRoutes = {
  pages: {
    home: "/",
    dreamList: "dream",
    dreamNew: "dream/new",
    dreamDetail: "dream/:id",
    dreamEdit: "dream/:id/edit",
    addDream: "add-dream",
  },
  navigate: {
    home: "/",
    dreamList: "/dream",
    dreamNew: "/dream/new",
    dreamDetail: (id) => `/dream/${id}`,
    dreamEdit: (id) => `/dream/${id}/edit`,
    addDream: "/add-dream",
  },
};
