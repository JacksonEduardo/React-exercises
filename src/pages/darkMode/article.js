import React from "react";
import "../../style/darkMode.css";

const Article = ({ title, body }) => {
  return (
    <article className="darkModeContainer">
      <div style={{ position: "relative", height: "fit-content" }}>
        <h4>{title}</h4>
        <div className="underline"></div>
      </div>
      <p className="paragrafDarkMode">{body}</p>
    </article>
  );
};

export default Article;
