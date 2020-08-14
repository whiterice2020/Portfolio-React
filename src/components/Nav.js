import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {

}

// import NavDropdown from 'react-bootstrap/Nav';
// import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <h3>Paul DelPadre</h3>
      <ul className="nav-links">
        <Link to="/about">
          <li className="navLi">About</li>
        </Link>
        <Link to="/Contact">
          <li className="navLi">Contact</li>
        </Link>
        <Link to="/Portfolio">
          <li className="navLi">Portfolio</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
