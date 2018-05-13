import "./portfolio.css";
import React, { Component } from 'react';
import API from "../../utils/utility";
import Cards from "../../components/cards";

class Portfolio extends Component {
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
                    ? <Cards projects={this.state.projects} />
                    :
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                }
            </div>
        )
    }

}


export default Portfolio;

