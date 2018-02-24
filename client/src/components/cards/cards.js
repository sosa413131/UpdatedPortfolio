import React, { Component } from 'react';
import "./cards.css";
// import API from "../../utils/utility";
import Project from "../project"
import workingAPI from '../../API/APIprojects' 
import { Button } from 'react-bootstrap';


class Cards extends React.Component {
    // state = {
    //     data: []
    // }

    // componentWillMount() {
    //     API.getProjects()
    //         .then(res => {
    //             if (res.data.status === "error") {
    //                 throw new Error("API erreor");
    //             };

    //             console.log(`res: ${JSON.stringify(res.data)}`);

    //             this.setState = { data: JSON.stringify(res.data), error: "" }

    //         })
    //         .catch(err => {
    //             console.log(err)
    //             // this.setState({ error: err.message });

    //         })
    // }
    render() {
        return (


            //     <ClickItem
            //       key={item.id}
            //       id={item.id}
            //       shake={!this.state.score && this.state.topScore}
            //       handleClick={this.handleItemClick}
            //       image={item.image}
            //     />
            //   ))}

            // {item.description}
            // {item.githubRepoLink}
            // {item.deployedsite}
            // alt={item.alt}


            <div className='row displayCards'>
                {workingAPI.map(item =>
                    <div className='col-md-4 col-sm-6 cardDiv' key={item.name}>
                       
                        <img src={item.image} height="300" width="300" className='card' href={item.deployedsite}/>
                        <div className='cardTitle'> {item.name}</div>
                       
                         {(item.works) ? <div><Button bsStyle='primary' className='appButton' href={item.deployedsite}> View App</Button>  <Button  bsStyle='success' className='codeButton' href={item.githubRepoLink}> View Code</Button></div>:<div><Button bsStyle='danger' className='appButton' href={'/construction'}> TBD </Button>  <Button  bsStyle='warning' className='codeButton' href={item.githubRepoLink}> View Code</Button></div>}

                    </div>

                )}

            </div>
        );
    };
}


export default Cards;