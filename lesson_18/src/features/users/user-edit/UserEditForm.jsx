import {
  useUpdateUserRoleMutation,
  useAddUserMutation,
} from "@/entities/user/api/userApi";

import UserForm from "@/entities/user/ui/UserForm";

export function UserEditForm({ user = {}, onSuccess }) {
  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation();
  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation();

  const handleSubmit = async ({ email, displayName, role }, e) => {
    if (e) {
      e.preventDefault();
    }
    if (user.id) {
      await updateUserRole({ uid: user.id, role });
    } else {
      await addUser({ email, displayName, role });
    }
    onSuccess && onSuccess();
  };

  return (
    <UserForm
      user={user}
      onSubmit={handleSubmit}
      isSubmiting={isUpdating || isAdding}
      isSubmitingError={updateError || addError}
    />
  );
}
