import React, { useEffect } from "react";
import darkMode from "../../data/darkMode.js";
import Article from "../darkMode/article.js";
import "../../style/darkMode.css";
import { useState } from "react";

// function memory last color, dark or light mode
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

const Dark = () => {
  const [theme, setTheme] = useState(getFromLocalStorage());

  // Function changeTheme
  const changeTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="Container">
        <button onClick={changeTheme} className="btn">
          Change mode
        </button>
        <section className="article-section">
          {darkMode.map((el) => (
            <Article key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Dark;
