import React, {Component} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {NavLink} from "react-router-dom";
import {App} from "../App";
import {connect} from "react-redux";

export class TopNav extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">ProfileHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.renderNavs()}
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    renderNavs = () => {
        return this.props.isloggedIn ?
            (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to='/' className="nav-link">Logout</NavLink>
                    </NavItem>
                </Nav>)
            :
            (
                <Nav className="ml-auto" navbar>

                    <NavItem>
                        <NavLink to='/' className="nav-link">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/signup' className="nav-link">Signup</NavLink>
                    </NavItem>
                </Nav>
            )
    }
}

function mapStateToProps(state) {
    console.log('state redux', state)
    return {
        isloggedIn: Object.keys(state.auth.user).length > 0 
    }
}

export default connect(mapStateToProps, null)(TopNav)