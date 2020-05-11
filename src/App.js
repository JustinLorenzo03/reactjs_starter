import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Everything imported from each container
import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
import GameStats from "./components/GameStatsContainer/GameStats.js";
import Donate from "./components/DonateContainer/Donate.js";
import Avatar from "./components/AvatarContainer/Avatar.js";
import UserHome from "./components/UserContainer/UserHome.js";
import Timer from "./components/UserVsComputerContainer/Timer.js";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-up"}>Code Strikers ReactJS Starter</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/game-stats"}>GameStats</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/donate"}>Donate</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to={"/user-home"}>User Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/timer"}>Timer</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={WelcomeScreen} /> //must change to welcome at Login
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/game-stats" component={GameStats} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/user-home" component={UserHome} />
            <Route exact path="/timer" component={Timer} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
