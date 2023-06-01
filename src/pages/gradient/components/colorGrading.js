import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "../components/singleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  const [isError, setIsError] = useState(false);
  const [selectedColor, setSelectedColor] = useState([]);
  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 5,
  });

  // const color = new Values("rgb(51, 173, 255)");
  // console.log(color.all(10));

  const handdleSubmit = (e) => {
    e.preventDefault();
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
      try {
        setSelectedColor(
          new Values(color).all(Math.round((100 / parseInt(qty, 10)) * 2))
        );
        setColorInput({
          color: "",
          qty: 10,
        });
      } catch (error) {
        setIsError(true);
      }
      // setSelectedColor(
      //   new Values(color).all(Math.round((100 / parseInt(qty, 10)) * 2))
      // );
    }
  };
  const handdleChange = (e) => {
    if (isError) {
      setIsError(false);
    }
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value,
    });
  };

  useEffect(() => {
    setColorInput({ qty: 10, color: "#ff7f50" });
    setSelectedColor(new Values("#ff7f50").all(Math.round((100 / 10) * 2)));
  }, []);
  return (
    <>
      <form className="form" onSubmit={handdleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handdleChange}
            className="input"
          ></input>
          <input
            type="number"
            name="qty"
            id="qty"
            value={colorInput.qty}
            max={100}
            min={5}
            step={5}
            onChange={handdleChange}
            className="input"
          ></input>
        </div>
        <button className="btn btn-selector" type="submit">
          Create
        </button>
      </form>
      <section className="color-section">
        {isError ? (
          <h4 className="section-center">the color code does not exist</h4>
        ) : selectedColor.length > 0 ? (
          selectedColor.map((el) => <SingleColor key={uuidv4()} {...el} />)
        ) : (
          <h4>Loading</h4>
        )}
      </section>
    </>
  );
};

export default ColorGrading;
