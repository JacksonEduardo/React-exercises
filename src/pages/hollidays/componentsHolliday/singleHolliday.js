import React from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
const singleHolliday = ({
  titolo,
  durata,
  descrizione,
  prezzo,
  img,
  next,
  previous,
}) => {
  return (
    <div className="holiday-container px-4 py-3">
      <img src={img} alt={titolo} className="img" />
      <div className="holiday-info">{titolo}</div>
      <p>{descrizione}</p>
      <div className="holiday-cost">
        <small>{durata}</small>
        <h5 style={{ color: "var(--primary-blue)" }}>
          {""}
          {(prezzo / 100).toFixed(2)} €
        </h5>
      </div>
      <div className="btn-group">
        <button className="btnHoliday btn-reset" onClick={previous}>
          <GrFormPreviousLink className="icon" />
        </button>
        <button className="btnHoliday btn-reset" onClick={next}>
          {""}
          <GrFormNextLink className="icon" />
          {""}
        </button>
      </div>
    </div>
  );
};
export default singleHolliday;
