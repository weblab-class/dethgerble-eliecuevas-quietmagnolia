import React, { Component } from "react";

import "../../utilities.css";
import "./Navbar.css";
import "./ButtonMenu.js";
import ButtonMenu from "./ButtonMenu.js";
import LoginButton from "./LoginButton.js";
import "./LoginButton.css";
import GoogleLogin, { GoogleLogout } from "react-google-login";


const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";

const Navbar = (props) => {
    return (

    <>
    <span className = "Navbar">
    <h1 className = "Background"> </h1>
    <h1 className = "Logo"> evolve.io </h1>


    <h1 className = "MenuText"> Menu </h1>

    <ButtonMenu/>
    </span>
    {props.userId ? (

    <GoogleLogout
    clientId={GOOGLE_CLIENT_ID}

    buttonText="Logout"
    onLogoutSuccess={props.handleLogout}
    onFailure={(err) => console.log(err)}
    className = "GoogleButton"
    />
    ) : (
    <GoogleLogin
    clientId={GOOGLE_CLIENT_ID}
    buttonText="Login"
    onSuccess={props.handleLogin}
    onFailure={(err) => console.log(err)}
    className = "GoogleButton"
    />

)}
    </>

);
};

export default Navbar;
