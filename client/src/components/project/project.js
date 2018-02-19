import React from 'react';
import "./project.css";


const project = (props) => (
    <div>

        {props.name}
        {props.description}
       {props.githubRepoLink}
       {props.deployedsite}
    </div>
)
export default project;
