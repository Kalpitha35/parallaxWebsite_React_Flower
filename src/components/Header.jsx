import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar,  Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
   <Navbar  collapseOnSelect expand="lg" style={{backgroundColor:'pink'}} className="navbar w-100">
      <Container>
        <Navbar.Brand className='text-white' href="/" style={{fontSize:'30px'}}><span style={{color:'red',fontFamily:' "Dancing Script", cursive'}}>FLOR</span>ELLO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="me-auto ">
           

            <Link className='menu me-4 ' to={'/'}  style={{textDecoration:"none",fontSize:"1.8rem",color:'deeppink'}}>Home</Link>
            <Link className= 'menu me-4' to={'/'} style={{textDecoration:"none",fontSize:"1.8rem",color:'deeppink'}}>Gallery</Link>
            <Link className='menu me-4 ' to={'/shop'} style={{textDecoration:"none",fontSize:"1.8rem",color:'deeppink'}}>Shop By</Link>
            <Link className='menu me-4 ' to={'/'} style={{textDecoration:"none",fontSize:"1.8rem",color:'deeppink'}}>Collections</Link>
            <Link className='menu me-4 ' to={'/'} style={{textDecoration:"none",fontSize:"1.8rem",color:'deeppink'}}>About</Link>
            <Link className=' menu me-4 ' to={'/'} style={{textDecoration:"none",fontSize:"1.8rem",color:'deeppink'}}>Contact</Link>

            
          </Nav>
          <Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
            <Nav.Link style={{color:'deeppink'}} href="#deets">Sign In</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header