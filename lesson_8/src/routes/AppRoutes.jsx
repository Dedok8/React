import { Route, Routes, useLocation } from "react-router";
import frontRoutes from "./frontRoutes";
import React from "react";
import MainLayout from "../pages/layouts/MainLayout";
import Home from "../pages/utils/Home";
import TeachersMain from "../pages/utils/TeachersMain";
import AddTeacher from "../pages/teachersComponent/AddTeacher";
import UpdateTeacher from "../pages/teachersComponent/UpdateTeacher";
import Meetings from "../pages/utils/Meetings";
import SecondLayout from "../pages/layouts/SecondLayout";
import AboutApp from "../pages/about/AboutApp";
import AboutDev from "../pages/about/AboutDev";
import Page404 from "../pages/utils/Page404";

function AppRoutes() {
  function DebugRoutes() {
    const location = useLocation();

    React.useEffect(() => {
      console.log("Current path:", location.pathname);
    }, [location]);

    return null;
  }

  return (
    <>
      <DebugRoutes />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={frontRoutes.pages.home} element={<Home />}></Route>
          <Route
            path={frontRoutes.pages.teachers.index}
            element={<TeachersMain />}
          />
          <Route
            path={frontRoutes.pages.teachers.add}
            element={<AddTeacher />}
          />
          <Route path="/teachers/:id/edit" element={<UpdateTeacher />} />
          <Route path={frontRoutes.pages.meetings} element={<Meetings />} />
        </Route>
        <Route element={<SecondLayout />}>
          <Route path="/about-app" element={<AboutApp />}></Route>
          <Route path="/about-dev" element={<AboutDev />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
