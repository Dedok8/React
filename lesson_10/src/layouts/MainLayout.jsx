import { Outlet } from "react-router";
import Header from "./Header";
import TravelProvider from "@/provider/TravelProvider";
import TravelProviderData from "@/provider/TravelProviderData";
import ThemeProvider from "@/provider/ThemeProvider";

function MainLayout() {
  return (
    <ThemeProvider>
      <Header />
      <TravelProviderData>
        <TravelProvider>
          <main>
            <Outlet />
          </main>
        </TravelProvider>
      </TravelProviderData>
    </ThemeProvider>
  );
}

export default MainLayout;
