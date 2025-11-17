import useDeleteUser from "@/features/user/delete-user/model/useDeleteUser";

function DeleteUserBtn({ userId }) {
  const { handleDeleteUser, loading, error } = useDeleteUser();

  if (error) return <div>Error: {error.message}</div>;
  return (
    <button onClick={() => handleDeleteUser(userId)} disabled={loading}>
      {loading ? "Видалення..." : "Видалити користувача"}
    </button>
  );
}

export default DeleteUserBtn;
