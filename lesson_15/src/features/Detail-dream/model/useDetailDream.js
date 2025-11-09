import { useDetaileDreamQuery } from "@/entities";

function useDetailDream({ id }) {
  const {
    data: detailDream,
    isLoading,
    isError,
    refetch,
  } = useDetaileDreamQuery(id, {
    skip: !id,
  });

  return {
    detailDream,
    isLoading,
    isError,
    refetch,
  };
}

export default useDetailDream;
