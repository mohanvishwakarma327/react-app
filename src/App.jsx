// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NavbarPage from "./components/NavbarPage";
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<NavbarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
