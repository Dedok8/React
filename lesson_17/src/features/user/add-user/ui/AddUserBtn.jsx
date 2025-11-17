import useAddUser from "@/features/user/add-user/model/useAddUser";
import FormUser from "@/features/user/form-user/ui/FormUser";

function AddUserBtn() {
  const { handleAddUserForm, isLoading, error } = useAddUser();

  if (error) return error.message;
  return <FormUser onSubmit={handleAddUserForm} isLoading={isLoading} />;
}

export default AddUserBtn;
