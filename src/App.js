import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dating from "./pages/dating";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dating" element={<Dating />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
