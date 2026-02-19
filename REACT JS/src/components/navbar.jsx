import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'  

function Navbar2() {
  return (
     
      <Navbar bg="dark" variant="dark" expand ="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}

export default Navbar2