import MainLayout from "@/components/layouts/MainLayout";
import Home from "@/pages/Home";
import Page404 from "@/pages/Page404";

// === Patients ===
import PatientsManager from "@/pages/patients/PatientsManager";
import PatientsForm from "@/pages/patients/components/PatientsForm";
import PatientsDetails from "@/pages/patients/components/PatientsDetails";

// === Appointments ===
import AppointmentsManager from "@/pages/appointments/AppointmentsManager";
import AppointmentsForm from "@/pages/appointments/components/AppointmentsForm";

// === Doctors ===
import DoctorsManager from "@/pages/doctors/DoctorsManager";
import DoctorsForm from "@/pages/doctors/components/DoctorsForm";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <Home />, meta: { title: "Home" } },

      // === Patients ===
      {
        path: "patients",
        children: [
          {
            index: true,
            element: <PatientsManager />,
            meta: { title: "Пацієнти" },
          },
          { path: "new", element: <PatientsForm /> },
          { path: ":id/edit", element: <PatientsForm /> },
          { path: ":id", element: <PatientsDetails /> },
        ],
      },

      // === Appointments ===
      {
        path: "appointments",
        children: [
          {
            index: true,
            element: <AppointmentsManager />,
            meta: { title: "Прийоми" },
          },
          { path: "new", element: <AppointmentsForm /> },
          { path: ":id/edit", element: <AppointmentsForm /> },
        ],
      },

      // === Doctors ===
      {
        path: "admin/doctors",
        children: [
          {
            index: true,
            element: <DoctorsManager />,
            meta: { title: "Лікарі" },
          },
          { path: "new", element: <DoctorsForm /> },
          { path: ":id/edit", element: <DoctorsForm /> },
        ],
      },
    ],
  },
];
