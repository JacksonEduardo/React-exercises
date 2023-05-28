import React from "react";
import logo from "../logo.svg";

const Home = () => {
  return (
    <div className="background vh-100 w-100">
      <div className="pt-5">
        <h1 className="text-center">Welcome in React exercise</h1>
        <div className="d-flex justify-content-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="fst-italic text-center fs-5">
          In this site you can found some exercise make during a React Lesson
        </p>
        <p className="fst-italic text-center">
          Navigate with Navbar to see all exercise
        </p>
      </div>
    </div>
  );
};

export default Home;
