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
      <div className="flex items-center justify-between mb-4">
        <label className="w-full max-w-xs relative">
          <input
            type="text"
            placeholder="Пошук пацієнта..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="border border-gray-300 rounded px-3 py-2 w-full pr-10"
          />
          {isLoadingFilter && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="animate-spin h-5 w-5 text-blue-500"
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
        </label>

        <Link
          to={frontRoutes.navigate.patients.edit()}
          className="ml-4 text-blue-600 hover:underline whitespace-nowrap"
        >
          Додати нового пацієнта
        </Link>
      </div>

      {patientsList.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          {trimDebounceValue
            ? "Нічого не знайдено за цим запитом."
            : "Пацієнтів ще не додано."}
        </div>
      ) : (
        <ul>
          {patientsList.map((item) => (
            <PatientsItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      {!trimDebounceValue && totalPages > 1 && (
        <PaginationBlock
          totalPages={totalPages}
          page={currentPage}
          setPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default PatientsList;
