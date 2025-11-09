import { useMemo, useState } from "react";
function useGetDreamsFilter() {
  const [selectCategory, setSelectCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filters = useMemo(() => {
    return { category: selectCategory, order: sortOrder };
  }, [selectCategory, sortOrder]);

  return {
    filters,
    selectCategory,
    setSelectCategory,
    sortOrder,
    setSortOrder,
  };
}

export default useGetDreamsFilter;
