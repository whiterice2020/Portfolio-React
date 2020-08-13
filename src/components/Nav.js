import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// import NavDropdown from 'react-bootstrap/Nav';
// import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
        <Link to="/Portfolio">
          <li>Portfolio</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
