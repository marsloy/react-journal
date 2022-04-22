import React from "react";
import { NotePege } from "../notes/NotePege";
/* import { NothingSelected } from "./NothingSelected"; */
import { Sidebar } from "./Sidebar";

export const JournalPage = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {
          /*  <NothingSelected /> */
          <NotePege />
        }
      </main>
    </div>
  );
};
