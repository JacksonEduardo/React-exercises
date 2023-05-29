import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const BasicExample = () => {
  return (
    <Navbar className="shadow" bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">React By Hermess</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link
              href="https://legacy.reactjs.org/docs/getting-started.html"
              target="_blank"
            >
              React Document
            </Nav.Link>
            <NavDropdown title="Exercise" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link" to="/dating">
                  Dating
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/dark">
                  Dark Mode
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cocktail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;
