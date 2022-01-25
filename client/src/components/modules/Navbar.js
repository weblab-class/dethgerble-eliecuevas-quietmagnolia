import React from "react";

import "../../utilities.css";
import "./Navbar.css";
import "./ButtonMenu.js";
import ButtonMenu from "./ButtonMenu.js";
import "./LoginButton.css";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Nav from "./Nav.js";
import gohome from "./gohome.js";

const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";

const Navbar = (props) => {
    return (
        <>
        <nav className = "Navbar">
            
            <div className = "Logo" onClick = {gohome}> uevolve </div>
            <Nav/>
            <div> {props.userId ? (
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
            </div>
        </nav>
        </>
    );
};

export default Navbar;
