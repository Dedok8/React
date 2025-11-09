import Footer from "@/shared/ui/Footer";
import Header from "@/shared/ui/Header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
