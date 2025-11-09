import { useDeleteDreamMutation } from "@/entities";

function useDeleteDream() {
  const [deleteDream, { isLoading, isError }] = useDeleteDreamMutation();

  const handleDelete = async (id) => {
    if (window.confirm(`Бажаєте видалити цю мрію ?`))
      try {
        await deleteDream(id).unwrap();
      } catch (error) {
        console.error(error);
      }
    return false;
  };

  return { handleDelete, isLoading, isError };
}

export default useDeleteDream;
