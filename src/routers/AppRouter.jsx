import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { JournalPage } from "../components/journal/JournalPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JournalPage />} />
        <Route path="/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
