import React, { useEffect, useState } from "react";
import { rgbToHex } from "../utils/helpers";
const SingleColor = ({ rgb, type, weight }) => {
  let [message, setMessage] = useState(false);
  const copyColor = () => {
    navigator.clipboard
      .writeText(rgbToHex(...rgb))
      .then(() => setMessage(true))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);
  return (
    <article
      onClick={copyColor}
      className={` single-color ${type} `}
      style={{ backgroundColor: rgbToHex(...rgb) }}
    >
      {" "}
      <h4>{rgbToHex(...rgb)}</h4>
      {message && <h6>Colore copiato</h6>}
    </article>
  );
};

export default SingleColor;
