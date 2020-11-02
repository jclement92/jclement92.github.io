import React from 'react';
import { IconContext } from 'react-icons';

import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

 const NavBar = () => {
     return (
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
        <LinkContainer to="/">
            <Nav.Link>
                <NavItem>
                    <Navbar.Brand style={{color: 'white', textDecoration: 'none', fontWeight: "bold"}}>Christopher Clement</Navbar.Brand>
                </NavItem>
            </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar-nav nav-fill w-50">
            <LinkContainer to="/" >
              <Nav.Link style={{color: 'white'}}> <NavItem eventkey={1}>Home</NavItem> </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" style={{color: 'white'}}>
                <Nav.Link> <NavItem eventkey={2}>About</NavItem> </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio" style={{color: 'white'}}>
                <Nav.Link> <NavItem eventkey={3}>Portfolio</NavItem> </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume" style={{color: 'white'}}>
                <Nav.Link> <NavItem eventkey={4}>Resume</NavItem> </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" style={{color: 'white'}}>
                <Nav.Link> <NavItem eventkey={5}>Contact</NavItem> </Nav.Link>
            </LinkContainer>
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            {/* <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="/about">About</Nav.Link>
            <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="https://github.com/jclement92?tab=repositories">Portfolio</Nav.Link>
            <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="/resume">Resume</Nav.Link>
            <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="mailto:jclement92@yahoo.com">Contact</Nav.Link> */}
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.75em"}}>
              <div>
                <Nav.Link href="https://www.github.com/jclement92"> <IoLogoGithub /> </Nav.Link>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.75em"}}>
              <div>
                <Nav.Link href="https://www.linkedin.com/in/christopherclement"> <IoLogoLinkedin /> </Nav.Link>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.75em"}}>
              <div>
                <Nav.Link href="https://www.twitter.com/"> <IoLogoTwitter /> </Nav.Link>
              </div>
            </IconContext.Provider>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
 }

 export default NavBar;