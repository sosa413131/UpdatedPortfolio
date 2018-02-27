import "./portfolio.css";
import React, { Component } from 'react';
import API from "../../utils/utility";
import Cards from "../../components/cards";
// import Project from "../../components/project"

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
    }
    // componentWillMount() is invoked just before mounting, i.e. d before render()
    componentDidMount = () => {
        this.loadProjects();
    }

    loadProjects = () => {
        API.getProjects()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error("API error");
                };

                this.setState(
                    // API projects response assigned to state
                    { projects: res.data }
                )
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
                {this.state.projects.length
                ?<Cards projects={this.state.projects}/>
                :<div className='loadDiv'> Loading... <i class="fa fa-spinner" aria-hidden="true"></i> </div>
                }
            </div>
        )
    }

}


export default Portfolio;

