import React from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'
import {Link, Route, Switch} from "react-router-dom";
import UserProfile from "./components/UserProfile";

export const App = () => {
    return (
        <div>
            <TopNav/>
            <Link to="/">Login</Link>
            <Switch>
                <Route exact path={"/profile"} component={UserProfile}/>
                <Route path={"/"} component={Login}/>
            </Switch>
        </div>
    )
}

export default App
