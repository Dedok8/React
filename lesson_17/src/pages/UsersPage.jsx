import { UserList } from "@/widgets/userList/UserList";

import { roles } from "@/shared/config/roles";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import AddUserBtn from "@/features/user/add-user/ui/AddUserBtn";
import { useState } from "react";

export default function UsersPage() {
  const user = useSelector(selectAuthUser);
  const [modelOpen, setModelOpen] = useState(false);
  if (!user || user.role !== roles.admin) {
    return (
      <div>
        Доступ заборонено. Ця сторінка доступна лише для адміністратора.
      </div>
    );
  }

  return (
    <div>
      <h1>Користувачі</h1>
      <button onClick={() => setModelOpen(!modelOpen)}>
        {modelOpen ? "Закрити" : "Додати користувача"}
      </button>
      {modelOpen && <AddUserBtn />}
      <UserList />
    </div>
  );
}
