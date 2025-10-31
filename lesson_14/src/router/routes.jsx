import MainLayout from "@/components/layouts/MainLayout";
import Home from "@/pages/Home";
import Page404 from "@/pages/Page404";
import PatientsManager from "@/pages/Patients/PatientsManager";
import PatientsForm from "@/pages/Patients/components/PatientsForm";
import PatientsDetails from "@/pages/Patients/components/PatientsDetails";
import AppointmensManager from "@/pages/appointments/AppointmentsManager";
import AppointmensForm from "@/pages/appointments/components/AppointmentsForm";
import AppointmentsDetails from "@/pages/appointments/components/AppointmentsDetails";
import DoctorsManager from "@/pages/doctors/DoctorsManager";
import DoctorsDetails from "@/pages/doctors/components/DoctorsDetails";
import DoctorsForm from "@/pages/doctors/components/DoctorsForm";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: { title: "Home" },
      },
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
            element: <AppointmensManager />,
            meta: { title: "Прийоми" },
          },
          { path: ":id/edit", element: <AppointmensForm /> },
          { path: ":id", element: <AppointmentsDetails /> },
        ],
      },
      // === Doctors ===
      {
        path: "doctors",
        children: [
          {
            index: true,
            element: <DoctorsManager />,
            meta: { title: "Лікарі" },
          },
          { path: "new", element: <DoctorsForm /> },
          { path: ":id/edit", element: <DoctorsForm /> },
          { path: ":id", element: <DoctorsDetails /> },
        ],
      },
    ],
  },
];
