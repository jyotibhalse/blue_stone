import React from 'react';
import { Col, Container, Modal, Row} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './smallhead.css';
import Form from '../user_login/form';
import { useState } from 'react';
// import Login from '../user_login/login'


import { Link } from 'react-router-dom';

function AlignmentExample() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
      <Nav className="justify-content-end smallhead-1 mx-5 my-2" activeKey="/home">
        <Row className="heading1 mx-4 my-1">
          <Col>7471242104017</Col> | <Col><Link to ='/'>Home</Link></Col> | <Col onClick={handleShow}>signUp</Col> 
          <Col><Link to = '/login'>|Login</Link></Col>
        </Row>
      </Nav>
<Modal show={show} onHide={handleClose} size='lg'>
  <Container className='mod'>

  <button onClick={handleClose}>close</button>
  </Container>
 
<Form/>
</Modal>
      {/* <Nav className="justify-content-end smallhead-2 mx-2 my-2" activeKey="/home">
        <Row className="heading1 mx-0 my-0">
          <Col className="colom1">
            <BsViewStacked />
            <span>Recently viewed</span>
          </Col>
          <Col>
            <BsHouseExclamation /> Locate Our Store
          </Col>
          <Col>
            <BsHeart  />
          </Col>
          <Col>
            <BsShopWindow/>
          </Col>
        </Row>
      </Nav> */}
    </>
  );
}

export default AlignmentExample;
