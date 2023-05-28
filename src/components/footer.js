import React from "react";
import { useNavigate } from "react-router-dom";

// the CSS of footer is in App.css
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border w-100">
      <h3 className="text-center">Footer</h3>
      <div className="d-flex justify-content-between">
        {/* <button className="btn btn-dark text-white" onClick={}>Last Page</button> */}
        <button
          className="btn btn-dark text-white"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="btn btn-dark text-white"
          onClick={() => navigate(-1)}
        >
          Last Page
        </button>
      </div>
      <div className="d-flex justify-content-around">
        <button className="btn btn-dark text-white">bottone destro</button>
        <button className="btn btn-dark text-white">bottone sinistro</button>
      </div>
    </div>
  );
};

export default Footer;
