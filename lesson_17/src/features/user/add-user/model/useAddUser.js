import { useCreateUserMutation } from "@/entities/user/api/userApi";

function useAddUser() {
  const [createUSer, { isLoading, error }] = useCreateUserMutation();

  const handleAddUserForm = async (userData) => {
    try {
      await createUSer(userData).unwrap();
    } catch (error) {
      console.error("Failed to add user: ", error);
    }
  };

  return { handleAddUserForm, isLoading, error };
}

export default useAddUser;
