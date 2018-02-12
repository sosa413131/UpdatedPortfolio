import "./footer.css";
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

const Footer = () => {
    return (

        <footer className="footer">
            <Col md={6} xs={6} className='reactPlug'>
                <span > Proudly Created with React</span>
            </Col>

            <Col md={6} xs={6}  className='davidPlug'>
                <span> © Copyright David W Sosa 2018</span>
            </Col>
        </footer>
    )
}

export default Footer;