import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage,NewAdvertPage } from "pages";

//Routes -> it's like switch case

const MainRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="" element={<HomePage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="NewAdvert" element={<NewAdvertPage />} />
    </Routes>
  );
};

export default MainRouter;
