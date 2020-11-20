import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{minHeight: "10.5vh", overflowY: "hidden"}}>
      <LinkContainer to="/" >
        <Nav.Link>
          <Nav.Item>
            <Navbar.Brand style={{ textDecoration: 'none', fontWeight: "bold" }}>Chris Clement</Navbar.Brand>
          </Nav.Item>
        </Nav.Link>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/" >
            <Nav.Link> <Nav.Item eventkey={1}>Home</Nav.Item> </Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/projects">
            <Nav.Link> <Nav.Item eventkey={2}>Projects</Nav.Item> </Nav.Link>
          </LinkContainer>
          {/* <Nav.Link href="/home">Home</Nav.Link> */}
          {/* <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="https://github.com/jclement92?tab=repositories">Projects</Nav.Link>
            <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="mailto:jclement92@yahoo.com">Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;