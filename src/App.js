import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dating from "./pages/dating";
import Cart from "./pages/cart";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dating" element={<Dating />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
