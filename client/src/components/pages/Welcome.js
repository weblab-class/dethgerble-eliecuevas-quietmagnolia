import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Navbar from "../modules/Navbar.js";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import WelcomeStrip from "../modules/WelcomeStrip.js";

import "../../utilities.css";
import "./Welcome.css";

import { socket } from "../../client-socket.js";

import { get, post } from "../../utilities";
import { Route } from "react-router";



/**
 * Define the "App" component
 */
const Welcome = () => {
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
 
        
        <h1 className = "TextOnWelcomeImage"> Welcome to evolve</h1>

    <div className = "WelcomeStrip"> </div>


      <h1 className = "Picturesque">Your Picturesque Productivity</h1>
      <img className = "WelcomeImage" src = {WelcomeImage1}/>
      <Navbar/> 



    </>
  );
};

export default Welcome;
