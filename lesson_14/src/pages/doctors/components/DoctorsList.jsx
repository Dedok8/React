import { useGetDoctorsFilterNameQuery, useGetDoctorsQuery } from "@/api";
import PaginationBlock from "@/components/PaginationBlock";
import { useEffect, useMemo, useState } from "react";
import DoctorsItem from "./DoctorsItem";
import useDebounce from "@/hook/useDebounce";
import { Link } from "react-router";
import frontRoutes from "@/router/frontRoutes";

function DoctorsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const limitPage = 6;

  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 200);
  const trimDebounceValue = debounceValue.trim();

  const { data: doctorsData = [] } = useGetDoctorsQuery();

  const { data: filteredDoctorsList = [], isLoading: isLoadingFilter } =
    useGetDoctorsFilterNameQuery(trimDebounceValue, {
      skip: trimDebounceValue.length === 0,
    });

  const paginationData = useMemo(() => {
    const startIndex = (currentPage - 1) * limitPage;
    const endIndex = startIndex + limitPage;
    return doctorsData.slice(startIndex, endIndex);
  }, [doctorsData, currentPage, limitPage]);

  const doctorsList = useMemo(() => {
    if (trimDebounceValue) {
      if (Array.isArray(filteredDoctorsList)) {
        return filteredDoctorsList;
      }
      if (
        filteredDoctorsList?.data &&
        Array.isArray(filteredDoctorsList.data)
      ) {
        return filteredDoctorsList.data;
      }
      return [];
    }
    return paginationData;
  }, [trimDebounceValue, filteredDoctorsList, paginationData]);

  const totalPages = Math.ceil(doctorsData.length / limitPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-semibold text-gray-800">Список лікарів</h1>
        <Link
          to={frontRoutes.navigate.doctors.edit()}
          className="inline-block px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
        >
          + Додати лікаря
        </Link>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Пошук лікаря..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full rounded-xl border border-gray-300 py-2.5 pl-4 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
      </div>

      {doctorsList.length === 0 ? (
        <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-xl border border-gray-100">
          {trimDebounceValue
            ? "Нічого не знайдено за цим запитом."
            : "Лікарів ще не додано."}
        </div>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-4">
          {doctorsList.map((item) => (
            <DoctorsItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
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
