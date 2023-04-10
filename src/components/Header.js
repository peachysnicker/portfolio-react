import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <img
          id="logo"
          src="./images/logo.png"
          width="80"
          height="80"
          className="d-inline-block align-top d-flex justify-content-start"
          alt="Mariah's Logo"
        />
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/mariah-feser-ab8250243/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/peachysnicker"
                rel="noreferrer"
                target="_blank"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
