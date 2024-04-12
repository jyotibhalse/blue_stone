
import React from 'react'
import {Nav ,Container,NavDropdown,Navbar} from 'react-bootstrap'
function BasicExample(props) {
  console.log(props)
  return (
    <Navbar expand="lg fixed-top" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href=""><img src='https://img-b.udemycdn.com/course/240x135/2186558_1e84_4.jpg' style={{width:'70px',height:'30px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/page">Random color</Nav.Link>
            <Nav.Link href="/home">Movie</Nav.Link>
            <Nav.Link href="/github">Github</Nav.Link>
            <Nav.Link href="/code">Code</Nav.Link>
            <Nav.Link href="/form">form</Nav.Link>
            <Nav.Link href="/hardcoded">Hardcoded Page</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/form">form</NavDropdown.Item>
              <NavDropdown.Item href="/home">homework</NavDropdown.Item>
              <Nav.Link>{props.Title}</Nav.Link>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;