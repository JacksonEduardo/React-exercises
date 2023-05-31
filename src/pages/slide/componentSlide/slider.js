import React, { useState, useEffect } from "react";
import Slide from "./slide";
import data from "../../../data/dataSlide";

const Slider = () => {
  const [feedback, setFeedBack] = useState(data);
  const [active, setActive] = useState(0);

  //   NEXT SLIDE FUNCTION
  const nextSlide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > feedback.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  };

  //   PREVIEW SLIDE FUNCTION
  const prevSlide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return feedback.length - 1;
      }
      return prevValue - 1;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 2000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="container slider">
      {feedback.map((feedback, index) => {
        let positionClass = "ciao";
        if (index === active) {
          positionClass = "active";
        } else if (
          index + 1 === active ||
          (active === 0 && index === feedback.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }

        return (
          <Slide key={feedback.id} {...feedback} classes={positionClass} />
        );
      })}
      <div className="btn-group slider-btn-group">
        <button className="btn btn-slider prev-slider" onClick={prevSlide}>
          Preview
        </button>
        <button className="btn btn-slider next-slider" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
