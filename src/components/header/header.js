import React from "react";
import { Button, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'; 
import './header.css';

export default () => {
  return (
    <>
      {/* <Container className="logo-container">
        <img className="head_img" src="https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/bs-logo-2x.png" />
      </Container> */}
      
      <div className="container input_form">
        <InputGroup size="md">
          <Form.Control
            className="form_control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary input_form1" style={{ backgroundColor: 'darkorange' }}>
            <BsSearch />
          </Button>
        </InputGroup>
      </div>

      <br /><br />

      {/* <Navbar bg="dark" expand="sm" variant="dark" className="nav1">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
}
