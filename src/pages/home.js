import React from "react";
import logo from "../logo.svg";

const Home = () => {
  return (
    <>
      <h1>Welcome in React exercise</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>In this site you can found some exercise make</p>
      <p>during a React Lesson</p>
      <p className="">Navigate with Navbar to see all exercise</p>
    </>
  );
};

export default Home;
