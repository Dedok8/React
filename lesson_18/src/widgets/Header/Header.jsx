import LanguageSwitcher from "@/shared/i18n/ui/languageSwitcher";
import { MainMenu } from "./MainMenu";
import { UserInfo } from "./UserInfo";

export default function Header() {
  return (
    <header style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <LanguageSwitcher />
      <MainMenu />
      <UserInfo />
    </header>
  );
}
