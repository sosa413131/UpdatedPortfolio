import "./portfolio.css";
import React, { Component } from 'react';
import API from "../../utils/utility";
import Cards from "../../components/cards";
// import Project from "../../components/project"

class Portfolio extends React.Component {
    state = {
        projects: [],
    }

    componentDidMount = () => {
        this.loadProjects();
    }

    loadProjects = () => {
        API.getProjects()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error("API error");
                };

                this.setState((prevState) => {
                    projects:
                    [...prevState.projects] = res.data
                })
                console.log(this.state.projects)

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <span className='projectsHeader'>Projects</span>
                <Cards projects={this.state.projects}/>
            </div>
        )
    }
}


export default Portfolio;

