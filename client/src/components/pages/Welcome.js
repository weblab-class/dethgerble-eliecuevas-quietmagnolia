import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Navbar from "../modules/Navbar.js";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import LoginButton from "../modules/LoginButton.js";
import GoogleButtonSignIn from "../modules/GoogleButtonSignIn.js";

import "../../utilities.css";
import "./Welcome.css";

import GoogleLogin, { GoogleLogout } from "react-google-login";

import { socket } from "../../client-socket.js";

import { get, post } from "../../utilities";
import { Route } from "react-router";
import GoogleButtonRegister from "../modules/GoogleButtonRegister.js";

const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";


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
 
    <GoogleButtonSignIn/>
    <GoogleButtonRegister/>
        
    <h1 className = "TextOnWelcomeImage"> Welcome to evolve</h1>
    <h1 className = "NewUserText">New User? <b> Register</b> &nbsp;&nbsp;&nbsp;<i className = "arrow"></i>&nbsp;&nbsp;&nbsp;&nbsp;to begin your evolution</h1>
    <h1 className = "ExistingUserText">Returning User? <b>Sign In </b> &nbsp;&nbsp;&nbsp;<i className = "arrow"></i>&nbsp;&nbsp;&nbsp;&nbsp;to pick up where you left off</h1>

    <div className = "WelcomeStrip"> </div>


    <h1 className = "Picturesque">Your Picturesque Productivity</h1>
    <img className = "WelcomeImage" src = {WelcomeImage1}/>
    <Navbar/> 



    </>
  );
};

export default Welcome;
