import React from "react";
import {
  Form,
  InputGroup,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  BsHeart,
  BsSearch,
  BsShop,
  BsShopWindow,
  BsViewList,
} from "react-icons/bs";
import "./secondnav.css";

export default (params) => {
  return (
    <>
      <Navbar
        expand="lg"
        // data-bs-theme="light"
        className=" Navigator"
        // style={{ height: "80px" }}
      >
        <Navbar.Brand href="">
          <img
            src="https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/bs-logo-2x.png"
            className="d-inline-block align-top img1"
            width="272"
            alt="bluestone logo"
          />
        </Navbar.Brand>

        <Form inline className=" justify-content-center Information">
          <InputGroup>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text
              size="lg"
              className="form1"
              style={{ backgroundColor: "darkorange" }}
            >
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="imoge">
            <Nav.Link>
              <BsViewList /> Recently Viewed
            </Nav.Link>
            <Nav.Link>
              <BsShop /> Location
            </Nav.Link>
            <Nav.Link>
              <BsHeart />
            </Nav.Link>
            <Nav.Link>
              <BsShopWindow />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar expand="lg" sticky="top" className=" Navigator1" >
        <Nav className="container Navigator1">
          <Nav.Link>10+1 Monthly Plan</Nav.Link>
          <Nav.Link>Watch Jewellery </Nav.Link>
          <Nav.Link>Rings</Nav.Link>
          <Nav.Link>Earings</Nav.Link>
          <Nav.Link>Pendants</Nav.Link>
          <Nav.Link>Solitaires</Nav.Link>
          <Nav.Link>All Jewellery</Nav.Link>
          <Nav.Link>Gifts</Nav.Link>
          <Nav.Link>Coins</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
