import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from "./pages/Home";

function App() {
  const BrandName = "CODERS UNITED"

  return (
    <div>
      <Router>
        <Nav BrandName={BrandName} />
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
