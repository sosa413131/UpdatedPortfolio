import './contact.css'
import React, { Component, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react';

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
        this.handleMessageChange=this.handleMessageChange.bind(this);
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
        console.log(`A contact request was submitted\n Name:${this.state.name} \n email: ${ this.state.email} \n message: ${this.state.message}`);
        event.preventDefault();
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
      <input type="text" placeholder="Hi, My name is..." name={this.state.value} onChange={this.handleNameChange} />
                </label>
<label>
                    email:
      <input type="email" placeholder="blackpanther@wakanda.com" email={this.state.value} onChange={this.handleEmailChange} />
                </label>
                <label>
                    message:
      <input type="text" name="name" placeholder="I love your lyrics App!" message={this.state.value} onChange={this.handleMessageChange} />
                </label> 
                <input type="submit" value="Submit" />
            </form>
        )
    }
}



export default FormA;

