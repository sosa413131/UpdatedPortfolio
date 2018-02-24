import './contact.css'
import React, { Component, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react';
import { Row, Col, Button } from 'react-bootstrap'

class FormA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        console.log(`A contact request was submitted\n Name:${this.state.name} \n email: ${this.state.email} \n message: ${this.state.message}`);
        event.preventDefault();
    }
    render() {
        return (
            <Row className='formRow'>
                <form onSubmit={this.handleSubmit}>
                    <Col md={12} xs={12}>
                        <label className="nameLabel">
                           <span className='formText'> Name: </span>
                            <br/>
      <input type="text" placeholder="John Doe" name={this.state.value} onChange={this.handleNameChange} className="nameField" />
                        </label>
                    </Col>
                    <Col md={12} xs={12}>
                        <label className="emailLabel" >
                        <span className='formText'> Email: </span>
                            <br/>
      <input type="email" placeholder="blackpanther@wakanda.com" email={this.state.value} onChange={this.handleEmailChange} className="emailField" />
                        </label>
                    </Col>
                    <Col md={12} xs={12}>
                        <label className="emailLabel">
                        <span className='formText'> Message: </span>
                            <br/>
      <input type="text" name="name" placeholder="I love your lyrics App!" message={this.state.value} onChange={this.handleMessageChange} className="messageField" />
                        </label>
                        <br/>
                        <Button bsStyle="success" bsSize="large" className=".submitButton" type="submit">Submit</Button>
                    </Col>
                </form>
            </Row>
        )
    }
}



export default FormA;

