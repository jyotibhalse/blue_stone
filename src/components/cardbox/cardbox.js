import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './cardbox.css';

export default () => {
    return(
        <>
        <Row className="box1 my-2 mx-0">
            <Col xs={12} md={6} className="col1">
                
                    <iframe src="https://www.youtube.com/embed/YmXInAEjgpM"  title="YouTube Video" className="iframe-style"></iframe>
                
            </Col>
            <Col xs={12} md={6} className="col1">
                
                    <img src="https://kinclimg6.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/gms_dh.v1.jpg" alt="Bluestone Image" className="img-style" />
                
            </Col>
        </Row>
        <div className="arrow1">
        <iframe src="https://www.youtube.com/embed/YmXInAEjgpM"  title="YouTube Video" className="iframe-style1"></iframe><br/>
        <img src="https://kinclimg6.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/gms_dh.v1.jpg" alt="Bluestone Image" className="img-style1" />
                       

        </div>
        </>
    ); 
}
