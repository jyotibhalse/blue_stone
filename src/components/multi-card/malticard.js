
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './multicard.css';

export default (params) => {
    return (
        <Row className="container mx-5 my-2">
            <Col xs={12} md={4}>
                <Card className='multi-1'>
                    <Col>
                    <img src="https://st2.depositphotos.com/5266903/8502/i/950/depositphotos_85021252-stock-photo-medical-certificate-icon.jpg" alt="Medical Certificate" />
            
                    </Col>
                   <Col> 100% Certified <br/> Jewellery 
               </Col>                 
               </Card>
            </Col>

            <Col xs={12} md={4} >
                <Card className='multi-1 my-2'>
                    <Col>  <img src="https://cdn-icons-png.flaticon.com/512/3585/3585031.png" alt="Flaticon Image" />
               </Col>
                 </Card>
            </Col>

            <Col xs={12} md={4} >
                <Card className='multi-1 my-2'>
                    <img src="https://cdn-icons-png.flaticon.com/512/5067/5067083.png" alt="Flaticon Image" />
                </Card>
            </Col>
        </Row>
    );
}
