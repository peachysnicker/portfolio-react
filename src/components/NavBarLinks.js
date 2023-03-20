// Import of the useState Hook feature from react
import { useState } from "react";

const NavBarLinks = () => {
  return (
    <nav>
      <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
        About
      </NavLink>
      <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBarLinks;
