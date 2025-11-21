import { useTranslation } from "react-i18next";

export default function ForbiddenPage() {
  const { t } = useTranslation();
  return <h1>{t("forbidden.title")}</h1>;
}
