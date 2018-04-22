import React from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'
import {Link, Route} from "react-router-dom";

export const App = () => {
  return (
    <div>
      <TopNav />
        <Link to="/">Login</Link>
        <Route path={"/"} component={Login}/>
    </div>
  )
}

export default App
