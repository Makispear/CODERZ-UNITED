import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Nav from './components/Nav';
import Home from "./pages/Home";

function App() {
  const BrandName = "CODERS UNITED"

  return (
    <div className="bg-black">
      <Router>
        <Nav BrandName={BrandName} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer BrandName={BrandName} />
      </Router>
    </div>
  );
}

export default App;
