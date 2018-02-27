import React, { Component } from 'react';
import "./cards.css";
// import Project from "../project"
import workingAPI from '../../API/APIprojects'
import { Button } from 'react-bootstrap';


const Cards = (props) => {
    // console.log(`props: ${JSON.stringify(props)}`);

    return (
        <div className='row displayCards'>
            {props.projects.map(item =>
                <div className='col-md-4 col-sm-6 cardDiv' key={item.name}>
                    <img src={item.image} height="300" width="300" className='card' href={item.deployedsite} />
                    <div className='cardTitle'> {item.name}</div>
                    {(item.works) ? <div><Button bsStyle='primary' className='appButton' href={item.deployedsite}> View App</Button>  <Button bsStyle='success' className='codeButton' href={item.githubRepoLink}> View Code</Button></div> : <div><Button bsStyle='danger' className='appButton' href={'/construction'}> TBD </Button>  <Button bsStyle='warning' className='codeButton' href={item.githubRepoLink}> View Code</Button></div>}
                </div>

            )}

        </div>
    )


}


export default Cards;