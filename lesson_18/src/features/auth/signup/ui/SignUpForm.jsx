import { useState } from "react";
import { useSignUp } from "../model/useSignUp";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export default function SignUpForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signUp, isLoading, error } = useSignUp();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      await signUp({ email, password, displayName });
      onSuccess && onSuccess();
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (err) {
      setErrorMessage(err?.message || t("error.errReg"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder={t("inputs.name")}
        required
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-900 outline-none bg-gray-50 dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 transition"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        type="email"
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-900 outline-none bg-gray-50 dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 transition"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={t("inputs.password")}
        type="password"
        required
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-900 outline-none bg-gray-50 dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 transition"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-600 dark:bg-gradient-to-r dark:from-blue-700 dark:to-indigo-800 dark:text-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {t("buttons.signup")}
      </button>
      {(error || errorMessage) && (
        <div className="text-red-500 dark:text-red-400 text-sm font-medium mt-1">
          {errorMessage || error?.data?.message || t("error.errReg")}
        </div>
      )}
    </form>
  );
}
