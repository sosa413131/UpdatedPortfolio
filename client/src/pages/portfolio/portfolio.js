import "./portfolio.css";
import Cards from "../../components/cards";
import React, { Component } from 'react';


class About extends React.Component {
    render() {
        return (
            <div>
                <span className='projectsHeader'> Projects</span>
                <Cards/>
            </div>

        )
    }
}


export default About;

