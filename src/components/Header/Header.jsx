import React from 'react'
import "./style.css"
import logo from "../../assets/icons8-to-do-list-96.png"
import {Container, Nav, Navbar} from "react-bootstrap"
function Header() { 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='title' href="#home"><img src={logo} className="logo" alt="" /><span>To-do</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">History</Nav.Link>
            <Nav.Link href="#link2">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header