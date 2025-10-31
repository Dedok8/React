const frontRoutes = {
  pages: {
    home: "/",
    patients: {
      base: "patients",
      edit: ":id/edit",
      details: ":id",
    },
    doctors: {
      base: "doctors",
      edit: ":id/edit",
      details: ":id",
    },
    appointments: {
      base: "appointments",
      edit: ":id/edit",
      details: ":id",
    },
  },

  navigate: {
    home: "/",

    patients: {
      base: "/patients",
      edit: (id) => (id ? `/patients/${id}/edit` : `/patients/new`),
      details: (id) => `/patients/${id}`,
    },

    doctors: {
      base: "/doctors",
      edit: (id) => (id ? `/doctors/${id}/edit` : `/doctors/new`),
      details: (id) => `/doctors/${id}`,
    },

    appointments: {
      base: "/appointments",
      edit: (id) => (id ? `/appointments/${id}/edit` : `/appointments/new`),
      details: (id) => `/appointments/${id}`,
    },
  },
};

export default frontRoutes;
