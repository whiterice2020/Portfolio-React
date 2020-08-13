import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/Nav';
// import "../styles/Nav.css";

function Nav() {
  return (
    // <br></br>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  );
}
export default Nav;
