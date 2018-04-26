import React from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'
import {Route, Switch} from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Signup from "./components/Signup";
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <TopNav/>
                <Route exact path={"/"} component={Login}/>
                <Route path={"/profile"} component={UserProfile}/>
                <Route path={"/signup"} component={Signup}/>
            </div>
        </Router>
    )
}

export default App