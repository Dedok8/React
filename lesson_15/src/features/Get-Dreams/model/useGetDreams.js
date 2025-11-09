import { useGetDreamsPaginationQuery } from "@/entities";
import { useMemo, useState } from "react";

function useGetDreams({ perPage, filters = {}, sortOrder = "asc" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cursors, setCursors] = useState([]);

  const { data, isLoading, isError, isFetching } = useGetDreamsPaginationQuery({
    page: currentPage,
    perPage,
    cursors,
    filters,
    sortOrder,
  });

  const dreams = useMemo(() => data?.data || [], [data]);
  const hasMore = data?.hasMore || false;

  const handlePageChange = (newPage) => {
    if (newPage > currentPage && data.cursor) {
      setCursors((prev) => [...prev, data.cursor]);
    }
    setCurrentPage(newPage);
  };

  const resetPagination = () => {
    setCurrentPage(1);
    setCursors([]);
  };
  return {
    dreams,
    currentPage,
    hasMore,
    isLoading,
    isError,
    isFetching,
    handlePageChange,
    resetPagination,
  };
}

export default useGetDreams;
