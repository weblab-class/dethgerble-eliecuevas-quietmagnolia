import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Farm from "./pages/Farm.js";
import Friends from "./pages/Friends.js";
import Profile from "./pages/Profile.js";
import Navbar from "./modules/Navbar.js";
import Welcome from "./pages/Welcome.js";
import Tasks from "./pages/Tasks.js";
import Stats from "./pages/Stats.js";
import About from "./pages/About.js";

import "../utilities.css";


import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import { Route } from "react-router";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
    
      <div>
        <Router>
          <Welcome 
          userId = {userId}
          path = "/" />
          <Farm path = "/farm" />
          <Tasks path="/tasks" />
          <Friends path='/friends/' />
          <Stats path="/stats" />
          <About path="/about" /> 
          <Profile path="/profile" />
          <NotFound default />
        </Router>
        </div>
      
      <Navbar 
      handleLogin = {handleLogin}
      handleLogout={handleLogout}
      userId = {userId}
      />
    </>
  );
};

export default App;
