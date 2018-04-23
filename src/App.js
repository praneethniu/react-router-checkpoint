import React, {Component} from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'
import {Link, Redirect, Route, Switch} from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Signup from "./components/Signup";
import {connect} from "react-redux";

export class App extends Component {
    render() {
        console.log('props in app', this.props)
        return (
            <div>
                <TopNav/>
                <Link to="/">Login</Link>
                <Switch>

                    <Route exact path={"/profile"} render={(props) => (<UserProfile {...props} />)}/>
                    <Route exact path={"/signup"} component={Signup}/>
                    <Route path={"/"} component={Login}/>
                </Switch>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        isloggedIn: state.auth.isloggedIn
    }
}

export default connect(mapStateToProps, null)(App)