import React, { useState, useEffect } from "react";

const ColorGrading = () => {
  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 5,
  });

  const handdleSubmit = (e) => {
    e.preventDefault();
    console.log(colorInput);
  };

  const handdleChange = (e) => {
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value,
    });
  };

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
    </>
  );
};

export default ColorGrading;
