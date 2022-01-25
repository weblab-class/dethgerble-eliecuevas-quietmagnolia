import React, { useState, useEffect, Component } from "react";
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
import gonewuser from "../modules/gonewuser.js";

const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";


/**
 * Define the "App" component
 */



const Welcome = (props) => {


  return (
    <>
 
    {props.userId ? (
      <>
      <h1 className = "TextOnWelcomeImage"> Welcome back, {props.userName}! </h1>
      </>
    ) : (

      <>
    <GoogleButtonSignIn
    handleLogin = {props.handleLogin}/>
    <div onClick = {gonewuser}>
    <GoogleButtonRegister
    handleLogin = {props.handleLogin}
    />
    </div>
        
    <h1 className = "TextOnWelcomeImage"> Welcome to uevolve</h1>

    <h1 className = "NewUserText">New User? <b> Register</b> &nbsp;&nbsp;&nbsp;<i className = "arrow"></i>&nbsp;&nbsp;&nbsp;&nbsp;to begin your evolution</h1>
    <h1 className = "ExistingUserText">Returning User? <b>Sign In </b> &nbsp;&nbsp;&nbsp;<i className = "arrow"></i>&nbsp;&nbsp;&nbsp;&nbsp;to pick up where you left off</h1>
      </>
    )}

    <div className = "WelcomeStrip"> </div>


    <h1 className = "Picturesque">Your Picturesque Productivity</h1>
    <img className = "WelcomeImage" src = {WelcomeImage1}/>



    </>
  );
};

export default Welcome;
