import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const BrandName = "CODERZ UNITED"

  return (
    <div className="bg-black">
      <Router>
        <Nav BrandName={BrandName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer BrandName={BrandName} />
      </Router>
    </div>
  );
}

export default App;
