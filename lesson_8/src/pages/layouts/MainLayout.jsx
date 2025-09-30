import { Outlet } from "react-router";
import Header from "../mainComponent/Header";
import Footer from "../mainComponent/Footer";

function MainLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
