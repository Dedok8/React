import { useLogout } from "@/features/auth/logout/model/useLogout";
import userDefault from "@/assets/user-default.svg";
import { GoogleAuthProvider } from "firebase/auth";

import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export function UserInfo() {
  const user = useSelector(selectAuthUser);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { logout } = useLogout();

  if (!user) {
    return (
      <Link
        to={frontRoutes.pages.LoginPage.navigationPath}
        style={{ marginLeft: 20 }}
      >
        {t("buttons.login")}
      </Link>
    );
  }
  const onLogout = () => {
    logout();
    navigate(frontRoutes.pages.LoginPage.navigationPath);
  };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  return (
    <div className="flex items-center gap-3 ml-5 text-gray-600 dark:text-gray-300">
      <img
        src={user.photoURL || userDefault}
        alt="user avatar"
        className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <span className="font-medium">
        {user.email} - {user.role}{" "}
      </span>
      <button
        onClick={onLogout}
        className="ml-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-semibold transition"
      >
        {t("buttons.logout")}
      </button>
    </div>
  );
}
