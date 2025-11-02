import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiRoutes from "./apiRoutes";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lesson-14-backend-uepj.onrender.com/",
  }),
  tagTypes: ["patients", "appointments", "doctors"],
  endpoints: (builder) => ({
    // === PATIENTS ===
    getPatients: builder.query({
      query: () => apiRoutes.patients.getAll,
      providesTags: ["patients"],
    }),
    getPatientsById: builder.query({
      query: (id) => apiRoutes.patients.getById(id),
      providesTags: (result, error, id) => [{ type: "patients", id }],
    }),
    getPatientsFilterName: builder.query({
      query: (name) => apiRoutes.patients.filterByName(name),
      providesTags: ["patients"],
    }),
    createPatients: builder.mutation({
      query: (data) => ({
        url: apiRoutes.patients.create,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["patients"],
    }),
    updatePatients: builder.mutation({
      query: ({ id, data }) => ({
        url: apiRoutes.patients.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "patients", id },
        "patients",
      ],
    }),
    deletePatients: builder.mutation({
      query: (id) => ({
        url: apiRoutes.patients.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: ["patients"],
    }),

    // === DOCTORS ===
    getDoctors: builder.query({
      query: () => apiRoutes.doctors.getAll,
      providesTags: ["doctors"],
    }),
    getDoctorsById: builder.query({
      query: (id) => apiRoutes.doctors.getById(id),
      providesTags: (result, error, id) => [{ type: "doctors", id }],
    }),
    getDoctorsFilterName: builder.query({
      query: (name) => apiRoutes.doctors.filterByDoctorName(name),
      providesTags: ["doctors"],
    }),
    createDoctor: builder.mutation({
      query: (data) => ({
        url: apiRoutes.doctors.create,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["doctors"],
    }),
    updateDoctor: builder.mutation({
      query: ({ id, data }) => ({
        url: apiRoutes.doctors.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "doctors", id },
        "doctors",
      ],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: apiRoutes.doctors.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: ["doctors"],
    }),

    // === APPOINTMENTS ===
    getAppointments: builder.query({
      query: () => apiRoutes.appointments.getAll,
      providesTags: ["appointments"],
    }),
    getAppointmentsById: builder.query({
      query: (id) => apiRoutes.appointments.getById(id),
      providesTags: (result, error, id) => [{ type: "appointments", id }],
    }),
    getAppointmentsFilterName: builder.query({
      query: (name) => apiRoutes.appointments.filterByPatientName(name),
      providesTags: ["appointments"],
    }),
    getAppointmentsFilterData: builder.query({
      query: (date) => apiRoutes.appointments.filterByDate(date),
      providesTags: ["appointments"],
    }),
    createAppointments: builder.mutation({
      query: (data) => ({
        url: apiRoutes.appointments.create,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["appointments"],
    }),
    updateAppointments: builder.mutation({
      query: ({ id, data }) => ({
        url: apiRoutes.appointments.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "appointments", id },
        "appointments",
      ],
    }),
    deleteAppointments: builder.mutation({
      query: (id) => ({
        url: apiRoutes.appointments.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: ["appointments"],
    }),
  }),
});

export const {
  // === Patients ===
  useGetPatientsQuery,
  useGetPatientsByIdQuery,
  useGetPatientsFilterNameQuery,
  useCreatePatientsMutation,
  useUpdatePatientsMutation,
  useDeletePatientsMutation,

  // === Doctors ===
  useGetDoctorsQuery,
  useGetDoctorsByIdQuery,
  useGetDoctorsFilterNameQuery,
  useCreateDoctorMutation,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation,

  // === Appointments ===
  useGetAppointmentsQuery,
  useGetAppointmentsByIdQuery,
  useGetAppointmentsFilterNameQuery,
  useGetAppointmentsFilterDataQuery,
  useCreateAppointmentsMutation,
  useUpdateAppointmentsMutation,
  useDeleteAppointmentsMutation,
} = api;
