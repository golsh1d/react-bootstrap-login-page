import React, { Component } from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default class Menus extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JAVA SCRIPT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">REACT</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </>
    )
  }
}