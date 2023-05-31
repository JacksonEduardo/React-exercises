import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dating from "./pages/dating/dating";
import Dark from "./pages/darkMode/darkMode";
import Footer from "./components/footer";
import Holliday from "./pages/hollidays/holliday";
import SlidePage from "./pages/slide/slidePage";
import IceCream from "./pages/iceCream/iceCream";
import Gradient from "./pages/gradient/gradient";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dating" element={<Dating />} />
          <Route path="/dark" element={<Dark />} />
          <Route path="/holliday" element={<Holliday />} />
          <Route path="/slide" element={<SlidePage />} />
          <Route path="/iceCream" element={<IceCream />} />
          <Route path="/gradient" element={<Gradient />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
