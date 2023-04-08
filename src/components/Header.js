import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <header>
      <div id="thanks" className="m-0">
        <p className="p-2 m-0 text-center"></p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <img
          id="logo"
          src="./images/logo.png"
          width="80"
          height="80"
          className="d-inline-block align-top d-flex justify-content-start"
          alt="Mariah's Logo"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                Home <span class="sr-only"></span>
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li> */}
            <li class="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
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
