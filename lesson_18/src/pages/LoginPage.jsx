import { useTranslation } from "react-i18next";
import { LoginForm } from "../features/auth/login";
import { SignUpForm } from "../features/auth/signup";
import { useState } from "react";

export default function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 border border-gray-100 dark:border-gray-800">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 select-none">
          {showSignUp ? t("buttons.signup") : t("buttons.login")}
        </h1>
        {showSignUp ? (
          <SignUpForm onSuccess={() => setShowSignUp(false)} />
        ) : (
          <LoginForm onSuccess={() => {}} />
        )}
        <button
          className="mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium text-base transition"
          type="button"
          onClick={() => setShowSignUp((v) => !v)}
        >
          {showSignUp ? t("buttons.login") : t("buttons.signup")}
        </button>
      </div>
    </div>
  );
}
