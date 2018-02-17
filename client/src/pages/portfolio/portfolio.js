import "./portfolio.css";
import Projects from "../../components/projects";
import React, { Component } from 'react';


class About extends React.Component {
    render() {
        return (
            <div>

                <h2> Projects</h2>
                <Projects/>
            </div>

        )
    }
}


export default About;

