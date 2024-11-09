import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
<>
<Navbar style={{background:"green"}} expand="lg" className="bg-body-tertiary d-flex">
      {/* <Container fluid  style={{background:"green"}} > */}
        <Navbar.Brand className='d-flex' style={{marginLeft:"100px", fontSize:"30px", fontWeight:"bold", }} href="#">PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
        
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>

</>  )
}

export default Header