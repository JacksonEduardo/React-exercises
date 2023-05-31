import React from "react";
// import "../../../style/slide.css";
import StartCreator from "../utils/starCreator";
const Slide = ({ autore, recensione, voto, classes }) => {
  // const array = ["stella", "stella", "stella", "meta", "vuota"];
  return (
    <div className={`slide ${classes}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <div className="star-container">{StartCreator(voto)}</div>
      </div>
    </div>
  );
};

export default Slide;
