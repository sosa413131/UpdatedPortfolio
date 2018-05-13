import "./navbar.css";
import React, { Component } from 'react';
import API from "../../utils/utility";
import 'react-dom'
import Dropdown from '../dropdown'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialMediaNavItems: [],
        }
    }

    // componentWillMount() is invoked just before mounting, i.e. d before render()
    componentDidMount = () => {
        this.loadSocialMediaNavItems();
    }

    loadSocialMediaNavItems = () => {
        API.getSocialMedia()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error("API error");
                };

                this.setState(
                    // API projects response assigned to state
                    { socialMediaNavItems: res.data }
                )

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/about">David W</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "active" : ""}>
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/portfolio" className={window.location.pathname === "/portfolio" ? "active" : ""}>
                            Portfolio
                        </NavItem>
                        <NavItem eventKey={3} href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>
                            Contact
                        </NavItem>

                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Social Media" id="basic-nav-dropdown">
                            {this.state.socialMediaNavItems.length ? this.state.socialMediaNavItems.map(function (SM) { return <MenuItem eventKey={`3.${SM.number}`} href={SM.href}>{SM.platform}</MenuItem> }) : "LOADING"}
                            <MenuItem divider />
                            <MenuItem href="mailto:Sosa.David88@gmail.com" eventKey={3.3}>Email</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        )
    }
};

export default navbar;
