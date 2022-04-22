import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotePege = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title "
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>
      </div>

      <div className="notes__image">
        <img
          src="https://heraldodemexico.com.mx/u/fotografias/m/2021/2/19/f608x342-323694_353417_0.jpg"
          alt="Michi Ok carita llorosa"
        />
      </div>
    </div>
  );
};
