import "./home.css";
import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import FaDollar from "react-icons/lib/fa/dollar";
import FaBomb from  "react-icons/lib/fa/bomb";
import { Row, Col } from 'react-bootstrap';
import Container from '../../components/container';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Hero backgroundImage={'/skeletonanddavid.jpg'}>
                   <span className='.welcome'> <h1><Col md={2} xs={2}><FaBomb/></Col><Col md={8} xs={8}> Welcome to My Page</Col><Col md={2} xs={2}><FaDollar/></Col></h1></span>
                   <span className ='.welcomeSmall'><h2>  <Col md={12} xs={12}> web developer, risk analyst and pop culture enthusiast</Col></h2></span>
                </Hero>
                <Row>
                <Container/>
                </Row>




            </div>

        )
    }
}


export default Home;