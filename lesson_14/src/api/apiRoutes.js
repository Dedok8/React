const apiRoutes = {
  // Пацієнти
  patients: {
    base: "/patients",
    getAll: "/patients",
    getById: (id) => `/patients/${id}`,
    create: "/patients",
    update: (id) => `/patients/${id}`,
    delete: (id) => `/patients/${id}`,
    filterByName: (name) => `/patients?name=${encodeURIComponent(name)}`,
  },

  // Прийоми
  appointments: {
    base: "/appointments",
    getAll: "/appointments",
    getById: (id) => `/appointments/${id}`,
    create: "/appointments",
    update: (id) => `/appointments/${id}`,
    delete: (id) => `/appointments/${id}`,
    filterByDate: (date) => `/appointments?date=${encodeURIComponent(date)}`,
    filterByPatientName: (name) =>
      `/appointments?patientName=${encodeURIComponent(name)}`,
  },

  // Лікарі
  doctors: {
    base: "/admin/doctors",
    getAll: "/admin/doctors",
    create: "/admin/doctors",
    getById: (id) => `/admin/doctors/${id}`,
    update: (id) => `/admin/doctors/${id}`,
    delete: (id) => `/admin/doctors/${id}`,
    filterByDoctortName: (name) =>
      `/appointments?doctorName=${encodeURIComponent(name)}`,
  },
};

export default apiRoutes;
