import useDeleteDream from "@/features/Delete-dream/model/useDeleteDream";

function DeleteDreamBtn({ id }) {
  const { handleDelete, isLoading } = useDeleteDream();

  const handleClick = async () => {
    await handleDelete(id);
  };

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={handleClick}
      className="px-4 py-2 bg-red-50 text-red-600 border-2 border-red-200 rounded-lg hover:bg-red-100 hover:border-red-400 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
    >
      <span>{isLoading ? "Видалення..." : "🗑️ Видалити"}</span>
    </button>
  );
}

export default DeleteDreamBtn;
