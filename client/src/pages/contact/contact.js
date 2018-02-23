import './contact.css'
import React, { Component, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react';

class FormA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(`A contact request was submitted: ${ this.state.value}`);
        event.preventDefault();
      }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
      <input type="text" placeholder="Hi, My name is..."  value={this.state.value} onChange={this.handleChange}  />
                </label>
                {/* <label>
                    email:
      <input type="text" name="email" placeholder="blackpanther@wakanda.com" />
                </label>
                <label>
                    message:
      <input type="text" name="name" placeholder="Hi, My name is..." />
                </label> */}
                <input type="submit" value="Submit" />
            </form>
        )
    }
}



export default FormA;

