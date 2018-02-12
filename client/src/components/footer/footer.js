import "./footer.css";
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (

        <footer className="footer">
            <Row className='footerRow'>
                <Col md={6} xs={6} className='reactPlug'>
                    <span > Proudly Created with React <img src={'/reactLogo.svg'} className="App-logo" alt="logo" /></span>
                </Col>

                <Col md={6} xs={6} className='davidPlug'>
                    <span> © Copyright David W Sosa 2018</span>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;