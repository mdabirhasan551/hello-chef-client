import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { FaRegUserCircle } from "react-icons/fa";

const Navigation = () => {
  const {user} = useContext(AuthContext) 
  console.log(user)
  return (
    <div>
     
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="fs-2" href="/">
            <b>Hello</b>{" "}
            <span className="text-warning">
              <b>Chef</b>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/chef">Chef</Nav.Link>
              <Nav.Link href="/recipes">Recipes</Nav.Link>
            </Nav>
            <Nav>
              
              {user?<FaRegUserCircle className="fs-1" style={{cursor: "pointer"}} /> : <Nav.Link href="/login">Login</Nav.Link>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
