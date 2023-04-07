import React from "react";
import "./Index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Socials from "./components/Socials";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Socials />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
