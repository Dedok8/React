import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <footer /> */}
    </>
  );
}

export default Layout;
