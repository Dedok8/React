const frontRoutes = {
  pages: {
    home: "/",
    patients: {
      base: "patients",
      edit: ":id/edit",
      details: ":id",
    },
    doctors: {
      base: "admin/doctors",
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
      base: "/admin/doctors",
      edit: (id) => (id ? `/admin/doctors/${id}/edit` : `/admin/doctors/new`),
      details: (id) => `/admin/doctors/${id}`,
    },

    appointments: {
      base: "/appointments",
      edit: (id) => (id ? `/appointments/${id}/edit` : `/appointments/new`),
      details: (id) => `/appointments/${id}`,
    },
  },
};

export default frontRoutes;
