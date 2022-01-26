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
import { getphrase , getfirstname } from "../modules/FunFunctions.js";
import { gotasks } from "../modules/goplaces.js";



const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";


/**
 * Define the "App" component
 */



const Welcome = (props) => {
  const [firstName, setFirstName] = useState("[Loading...]");
  const [welcomePhrase, setWelcomePhrase] = useState("[Loading...]");

  useEffect(() => {

  if (props.userName){

  setFirstName(getfirstname(props.userName));
  setWelcomePhrase(getphrase());

};
}, [props.userName]);


  return (
    <>
 
    {props.userId ? (
      <>
      <h1 className = "TextOnWelcomeImage"> {welcomePhrase}, {firstName}. </h1>
      <h1 className = "GetEvolvingText"><span className = "GetEvolvingArrow" onClick = {gotasks} ><b>Get Evolving</b> &nbsp;&nbsp;&nbsp; <i className = "arrow"></i></span></h1>
      </>
    ) : (

      <>
    <GoogleButtonSignIn
      handleLogin = {(res) => props.handleLogin(res, false)}/>
    
      <GoogleButtonRegister
        handleLogin = {(res) => props.handleLogin(res, true)}
    />
        
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
