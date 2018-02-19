import React, { Component } from 'react';
import "./cards.css";
import API from "../../utils/utility";
import Project from "../project"


class Cards extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        API.getProjects()


            .then(res => {
                if (res.data.status === "error") {
                    throw new Error("API erreor");
                };

                console.log(`res: ${JSON.stringify(res)}`);

                this.setState = { data: JSON.stringify(res) }



            })
            .catch(err => console.log(err));

    }
    render() {
        return (

            <div className='row'>
                {this.state.data.map(project => (
                    <div>
                        {project.name}
                        {project.description}
                        {project.githubRepoLink}
                    </div>

                ))}

            </div>
        );
    };
}


export default Cards;