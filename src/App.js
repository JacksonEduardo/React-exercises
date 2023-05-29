import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dating from "./pages/dating";
import Dark from "./pages/darkMode/darkMode";
import Footer from "./components/footer";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dating" element={<Dating />} />
          <Route path="/dark" element={<Dark />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
