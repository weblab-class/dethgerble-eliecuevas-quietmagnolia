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

const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";


/**
 * Define the "App" component
 */



const Farm = () => {


  return (
    <>
 
    

    <img className = "WelcomeImage" src = {WelcomeImage1}/>



    </>
  );
};

export default Farm;
