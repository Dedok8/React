import { Route, Routes, useLocation } from "react-router";
import frontRoutes from "./frontRoutes";
import MainLayout from "../pages/MainLayout";
import SecondLayout from "../pages/SecondLayout";
import Home from "../pages/Home";
import Meetings from "../pages/Meetings";
import AboutApp from "../pages/AboutApp";
import AboutDev from "../pages/AboutDev";
import TeachersMain from "../pages/TeachersMain";
import Page404 from "../pages/Page404";
import React from "react";
import AddTeacher from "../pages/teachersComponent/addTeacher";
import UpdateTeacher from "../pages/teachersComponent/UpdateTeacher";

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
