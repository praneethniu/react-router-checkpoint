import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {userLogout} from "../actions/auth.actions";
import {bindActionCreators} from "redux";

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
                        <NavLink to='/' className="nav-link" onClick={this.props.uLogout}>Logout</NavLink>
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
    return {
        isloggedIn: Object.keys(state.auth.user).length > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uLogout: bindActionCreators(userLogout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)