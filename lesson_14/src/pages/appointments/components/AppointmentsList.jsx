import {
  useGetAppointmentsQuery,
  useGetDoctorsQuery,
  useGetPatientsQuery,
} from "@/api";
import AppointmentsItem from "./AppointmentsItem";
import { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "@/hook/useDebounce";
import PaginationBlock from "@/components/PaginationBlock";
import frontRoutes from "@/router/frontRoutes";
import { Link } from "react-router";

function AppointmentsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const limitPage = 6;
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 200);
  const trimDebounceValue = debounceValue.trim();

  const {
    data: appointmentsData = [],
    isLoading,
    isError,
  } = useGetAppointmentsQuery();

  const { data: patientsList = [] } = useGetPatientsQuery();
  const { data: doctorsList = [] } = useGetDoctorsQuery();

  const getPatientName = useCallback(
    (id) => patientsList.find((p) => p.id === id)?.fullName || "—",
    [patientsList]
  );

  const getDoctorName = useCallback(
    (id) => doctorsList.find((d) => d.id === id)?.fullName || "—",
    [doctorsList]
  );

  const filteredAppointments = useMemo(() => {
    if (trimDebounceValue) {
      return appointmentsData.filter((appointment) => {
        const patientName =
          getPatientName(appointment.patientId)?.toLowerCase() || "";
        return patientName.includes(trimDebounceValue.toLowerCase());
      });
    }
    return appointmentsData;
  }, [trimDebounceValue, appointmentsData, getPatientName]);

  const paginationData = useMemo(() => {
    const startIndex = (currentPage - 1) * limitPage;
    const endIndex = startIndex + limitPage;
    return filteredAppointments.slice(startIndex, endIndex);
  }, [filteredAppointments, currentPage, limitPage]);

  const totalPages = Math.ceil(filteredAppointments.length / limitPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors backdrop-blur-sm">
      {/* Заголовок с декоративными элементами */}
      <div className="flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 relative">
          📋 Записи на прийом
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="🔍 Пошук пацієнта..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-5 py-3 w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none text-gray-700 dark:text-gray-200 shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
        </div>

        <Link
          to={frontRoutes.navigate.appointments.edit()}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap"
        >
          ✨ Новий прийом
        </Link>
      </div>

      {isLoading && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-20 flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-lg font-medium">Завантаження...</span>
        </div>
      )}

      {isError && (
        <div className="text-center text-red-600 dark:text-red-400 py-20 flex flex-col items-center gap-3 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-200/50 dark:border-red-800/50">
          <span className="text-4xl">⚠️</span>
          <span className="text-lg font-medium">Помилка завантаження</span>
        </div>
      )}

      {!isLoading && !isError && paginationData.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-20 flex flex-col items-center gap-3 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
          <span className="text-5xl opacity-50">📭</span>
          <span className="text-lg font-medium">Прийомів не знайдено</span>
        </div>
      )}

      <ul className="space-y-4">
        {paginationData.map((item) => (
          <AppointmentsItem
            key={item.id}
            item={item}
            patientName={getPatientName(item.patientId)}
            doctorName={getDoctorName(item.doctorId)}
          />
        ))}
      </ul>

      {!trimDebounceValue && totalPages > 1 && (
        <div className="mt-10">
          <PaginationBlock
            totalPages={totalPages}
            page={currentPage}
            setPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

export default AppointmentsList;
