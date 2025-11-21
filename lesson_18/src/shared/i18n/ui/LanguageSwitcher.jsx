import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || "en";

  const handleChangeLang = (e) => {
    const value = e.target.value;
    //-----змінюємо мову
    i18n.changeLanguage(value);

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("i18nextLng", value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Change language</span>

      <select
        value={lang}
        onChange={handleChangeLang}
        title="Language"
        aria-label="Language"
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    </label>
  );
}
