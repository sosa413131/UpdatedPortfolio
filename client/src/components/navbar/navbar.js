import "./navbar.css";
import React, { Component } from 'react';
import 'react-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class navbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/about">David W Sosa</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about"  className={window.location.pathname === "/" || window.location.pathname === "/about" ? "active" : ""}>
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
                            <MenuItem eventKey={3.1} href="https://www.linkedin.com/in/david-w-sosa-19706238/">LinkedIn</MenuItem>
                            <MenuItem eventKey={3.2} href="https://github.com/sosa413131">Github</MenuItem>
                            <MenuItem eventKey={3.3} href="https://stackoverflow.com/users/8422298/sosa413131">Stack Overflow</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Email</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        )
    }
};

export default navbar;
