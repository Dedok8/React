import { useDeleteUserMutation } from "@/entities/user/api/userApi";

function useDeleteUser() {
  const [deleteUser, { loading, error }] = useDeleteUserMutation();

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Бажаєте видалити користувача?")) {
      try {
        await deleteUser(userId);
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };
  return { handleDeleteUser, loading, error };
}

export default useDeleteUser;
