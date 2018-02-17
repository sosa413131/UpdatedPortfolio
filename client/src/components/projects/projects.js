import React from 'react';
import "./projects.css";
import axios from 'axios';
import Cards from '../cards';

// Make a request to backend for a project data to be used in portfolio page
var API = () => {
    axios.get('/api/projects')
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        }
    );
}

const projects = () => (
    <div className='projects'>
        <Cards projects={API.projects} />
    </div>
)
export default projects;
