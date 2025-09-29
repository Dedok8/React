import { Outlet } from "react-router";

function SecondLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SecondLayout;
