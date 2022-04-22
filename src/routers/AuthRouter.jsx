import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/auth/LoginPage";
import { RegisterPage } from "../components/auth/RegisterPage";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />

          <Route path="/auth/register" element={<RegisterPage />} />

          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};
