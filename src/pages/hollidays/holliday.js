import React from "react";
import "../../style/holliday.css";
import Journey from "./componentsHolliday/journey";
import Title from "./componentsHolliday/title";

const Holliday = () => {
  return (
    <div className="section-center">
      <div className="containerHolliday">
        <Title text="Le nostre Vacanze" />
        <Journey />
      </div>
    </div>
  );
};

export default Holliday;
