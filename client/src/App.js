import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';

function App() {
  const BrandName = "Project 1"

  return (
    <div>
      <Nav BrandName={BrandName} />
    </div>
  );
}

export default App;
