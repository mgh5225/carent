import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="" element={<HomePage />} />
    </Routes>
  );
};

export default MainRouter;
