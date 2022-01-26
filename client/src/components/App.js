import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Farm from "./pages/Farm.js";
import Friends from "./pages/Friends.js";
import Profile from "./pages/Profile.js";
import Navbar from "./modules/Navbar.js";
import Welcome from "./pages/Welcome.js";
import Tasks from "./pages/Tasks.js";
import Stats from "./pages/Stats.js";
import About from "./pages/About.js";
import Tutorial from "./pages/Tutorial";
import { get, post } from "../utilities";
import { socket } from "../client-socket.js";

import "../utilities.css";
import "./App.css";

// Define the "App" component

const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [userGoogleId, setUserGoogleId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name);
        setUserGoogleId(user.googleid);
        console.log('here');
        handleStats(user.googleid)
      }
    });
  }, []);

  const handleStats = (userGoogleId) => {
    get("/api/stats", {googleid: userGoogleId}).then((stats) => {
      console.log(stats)
      if (stats._id) {
        const body = {googleid: userGoogleId, taskscompleted: 0}
        post("/api/stats", body)
      };
    });
  };

  const handleLogin = (res, isNewUser) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUserName(user.name);
      setUserGoogleId(user.googleid);
      post("/api/initsocket", { socketid: socket.id });

      {isNewUser && navigate("/tutorial")}
      // handleStats(user.googleid)
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUserName(undefined);
    setUserGoogleId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <div className="web-app-container">
        <Navbar 
        handleLogin = {handleLogin}
        handleLogout={handleLogout}
        userId = {userId}
        /> 
        <div className="app-box">
          <Router>
            <Welcome 
            userId = {userId}
            userName = {userName}
            userGoogleId = {userGoogleId}
            path = "/" 
            handleLogin = {handleLogin}
            handleLogout={handleLogout}/>
            <Farm 
            userName = {userName}
            userGoogleId = {userGoogleId}
            path = "/farm" />
            <Tasks
            userName = {userName}
            userGoogleId = {userGoogleId}
            path="/tasks" />
            <Friends
            userName = {userName}
            userGoogleId = {userGoogleId}
            path='/friends/' />
            <Stats
            userName = {userName}
            userGoogleId = {userGoogleId}
            path="/stats" />
            <About
            userName = {userName}
            userGoogleId = {userGoogleId}
            path="/about" /> 
            <Profile 
            userName = {userName}
            userGoogleId = {userGoogleId}
            path="/profile" />
            <Tutorial
            userName = {userName}
            userGoogleId = {userGoogleId}
            path = "/tutorial" />

            <NotFound default />
          </Router>
        </div> 
      </div>
    </>
  );
};

export default App;
