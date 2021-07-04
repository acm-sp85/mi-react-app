import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/">Your Camera Gear</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="all-equipment">All Equipment</Nav.Link>
            <Nav.Link href="budget">Budget Overview</Nav.Link>
            <Nav.Link href="update">Update Item</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
