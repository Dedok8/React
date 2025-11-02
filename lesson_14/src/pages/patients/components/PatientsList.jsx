import { useGetPatientsFilterNameQuery, useGetPatientsQuery } from "@/api";
import { useEffect, useMemo, useState } from "react";
import PatientsItem from "./PatientsItem";
import PaginationBlock from "@/components/PaginationBlock";
import { Link } from "react-router";
import frontRoutes from "@/router/frontRoutes";
import useDebounce from "@/hook/useDebounce";

function PatientsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const limitPage = 6;

  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 200);
  const trimDebounceValue = debounceValue.trim();

  const {
    data: patientsData = [],
    isLoading: isLoadingPatients,
    isError: isErrorPatients,
    error,
  } = useGetPatientsQuery();

  const {
    data: filteredPatientsList = [],
    isError: isErrorFilter,
    isLoading: isLoadingFilter,
  } = useGetPatientsFilterNameQuery(trimDebounceValue, {
    skip: trimDebounceValue.length === 0,
  });

  const paginationData = useMemo(() => {
    const startIndex = (currentPage - 1) * limitPage;
    const endIndex = startIndex + limitPage;
    return patientsData.slice(startIndex, endIndex);
  }, [patientsData, currentPage, limitPage]);

  const totalPages = Math.ceil(patientsData.length / limitPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const patientsList = useMemo(() => {
    if (trimDebounceValue) {
      if (Array.isArray(filteredPatientsList)) {
        return filteredPatientsList;
      }
      if (
        filteredPatientsList?.data &&
        Array.isArray(filteredPatientsList.data)
      ) {
        return filteredPatientsList.data;
      }
      return [];
    }
    return paginationData;
  }, [trimDebounceValue, filteredPatientsList, paginationData]);

  const isAllError = trimDebounceValue ? isErrorFilter : isErrorPatients;

  if (isLoadingPatients && patientsData.length === 0) {
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
    <>
      <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-gray-50 via-white to-violet-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950/20 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-colors backdrop-blur-sm">
        {/* Заголовок */}
        <div className="flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl"></div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 relative">
            🏥 Список пацієнтів
          </h1>
        </div>

        {/* Поиск и кнопка добавления */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="🔍 Пошук пацієнта..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              className="border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-5 py-3 w-full pr-12 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 focus:outline-none text-gray-700 dark:text-gray-200 shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300"
            />
            {isLoadingFilter && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  className="animate-spin h-5 w-5 text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 pointer-events-none"></div>
          </div>

          <Link
            to={frontRoutes.navigate.patients.edit()}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-700 to-pink-700 hover:from-violet-700 hover:via-fuchsia-800 hover:to-pink-800 text-white rounded-2xl font-bold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap"
          >
            ✨ Додати нового пацієнта
          </Link>
        </div>

        {/* Пустое состояние */}
        {patientsList.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-20 flex flex-col items-center gap-3 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <span className="text-5xl opacity-50">🏥</span>
            <span className="text-lg font-medium">
              {trimDebounceValue
                ? "Нічого не знайдено за цим запитом."
                : "Пацієнтів ще не додано."}
            </span>
          </div>
        ) : (
          <ul>
            {patientsList.map((item) => (
              <PatientsItem key={item.id} item={item} />
            ))}
          </ul>
        )}

        {/* Пагинация */}
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
    </>
  );
}

export default PatientsList;
