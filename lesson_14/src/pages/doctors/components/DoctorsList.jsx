import { useGetDoctorsQuery } from "@/api";
import { useEffect, useMemo, useState } from "react";
import DoctorsItem from "./DoctorsItem";
import PaginationBlock from "@/components/PaginationBlock";
import { Link } from "react-router";
import frontRoutes from "@/router/frontRoutes";
import useDebounce from "@/hook/useDebounce";

function DoctorsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const limitPage = 6;

  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 200);
  const trimDebounceValue = debounceValue.trim();

  const {
    data: doctorsData = [],
    isLoading: isLoadingDoctors,
    isError: isErrorDoctors,
    error,
  } = useGetDoctorsQuery();

  const paginationData = useMemo(() => {
    const startIndex = (currentPage - 1) * limitPage;
    const endIndex = startIndex + limitPage;
    return doctorsData.slice(startIndex, endIndex);
  }, [doctorsData, currentPage, limitPage]);

  const totalPages = Math.ceil(doctorsData.length / limitPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const doctorsList = useMemo(() => {
    if (trimDebounceValue) {
      return doctorsData.filter((doctor) =>
        doctor.fullName.toLowerCase().includes(trimDebounceValue.toLowerCase())
      );
    }
    return paginationData;
  }, [trimDebounceValue, doctorsData, paginationData]);

  const isAllError = isErrorDoctors;

  if (isLoadingDoctors && doctorsData.length === 0) {
    return <div className="text-center py-8">Завантаження...</div>;
  }

  if (isAllError) {
    return (
      <div className="text-center py-8 text-red-600">
        Помилка завантаження: {error?.message || "Спробуйте пізніше"}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors backdrop-blur-sm">
      {/* Заголовок с декоративными элементами */}
      <div className="flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-3xl"></div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 relative">
          👨‍⚕️ Список лікарів
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="🔍 Пошук лікаря..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-5 py-3 w-full focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none text-gray-700 dark:text-gray-200 shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 pointer-events-none"></div>
        </div>

        <Link
          to={frontRoutes.navigate.doctors.edit()}
          className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-700 hover:from-emerald-700 hover:via-teal-800 hover:to-cyan-800 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap"
        >
          ✨ Новий лікар
        </Link>
      </div>

      {isLoadingDoctors && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-20 flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
          <span className="text-lg font-medium">Завантаження...</span>
        </div>
      )}

      {isAllError && (
        <div className="text-center text-red-600 dark:text-red-400 py-20 flex flex-col items-center gap-3 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-200/50 dark:border-red-800/50">
          <span className="text-4xl">⚠️</span>
          <span className="text-lg font-medium">Помилка завантаження</span>
          <span className="text-sm">
            {error?.message || "Спробуйте пізніше"}
          </span>
        </div>
      )}

      {!isLoadingDoctors && !isAllError && doctorsList.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-20 flex flex-col items-center gap-3 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
          <span className="text-5xl opacity-50">👨‍⚕️</span>
          <span className="text-lg font-medium">
            {trimDebounceValue
              ? "Нічого не знайдено за цим запитом."
              : "Лікарів ще не додано."}
          </span>
        </div>
      )}

      <ul className="space-y-4">
        {doctorsList.map((item) => (
          <DoctorsItem key={item.id} item={item} />
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

export default DoctorsList;
