import React from "react";
import "./Index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
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
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
