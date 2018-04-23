import React, {Component} from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Container,
    Row,
    Col,
    Alert,
    Input
} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {userLogin} from '../actions/auth.actions'
import {NavLink} from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        console.log('props', this.props)

        return (
            <Container className="main-wrapper">
                <Row style={{marginTop: '15vh'}}>
                    <Col
                        lg={{size: 6, offset: 3}}
                        style={{
                            border: '1px solid #c9c5c2',
                            padding: 35,
                            boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
                        }}
                    >
                        <Form>
                            <FormGroup>
                                <Label for="email-field">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email-field"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password-field">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="pass-field"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={e => this.setState({password: e.target.value})}
                                />
                            </FormGroup>
                            {this.props.showLoginError ? (
                                <Alert color="primary">
                                    Either your email or password is incorrect. Please try again.
                                </Alert>
                            ) : null}
                            {this.renderProfile()}
                            <NavLink to="/signup">Not a member</NavLink>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    renderProfile = () => {
        const {history, userLogin} = this.props
        const {email, password, showLoginError} = this.state
        return <Button className="mr-3" type="submit" color="primary" onClick={() => {
            userLogin(this.state, this.props.history)
        }}>Submit</Button>
    }
}

function mapStateToProps(state) {
    return {
        showLoginError: state.auth.showLoginError,
        isloggedIn: state.auth.isloggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLogin: bindActionCreators(userLogin, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
