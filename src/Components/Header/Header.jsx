import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/Header.css'


function Header() {
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#home" className='text-light brand' style={{fontSize:'25px', fontWeight:'bold',marginLeft:'20px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/10620/10620231.png"  alt="" />
            DoctorBooking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home" className='text-light link'style={{fontSize:'18px'}} >Home</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header