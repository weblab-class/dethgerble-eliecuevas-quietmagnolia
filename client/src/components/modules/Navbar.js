import React from "react";

import "../../utilities.css";
import "./Navbar.css";
import "./ButtonMenu.js";
import ButtonMenu from "./ButtonMenu.js";
import "./LoginButton.css";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Nav from "./Nav.js";
import { gohome } from "./goplaces.js";

const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";
let location = document.URL.toString()
//console.log(location);

function getLastPart(location){
    let result = ""
    let flag = false;
    for (let i = location.length -1; i>0 ; i--){
        if (location[i] === "/"){
            flag = true;
        } else if (flag === false){
            result = location[i] + result;
        }
    }
    return result
}

let lastPart = getLastPart(location);



const Navbar = (props) => {
    if (lastPart === "" || lastPart === "tasks"){
        return ( <>
        <nav className = "Navbar">
            
            <div className = "Logo" onClick = {gohome}> uevolve </div>
            <Nav/>
            <div> {props.userId ? (
            <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            />
            ) : (
            <>
            </>
            )} 
            </div>
        </nav>
        </>)
    } else {
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
            />
            ) : (
            <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            
            />
            )} 
            </div>
        </nav>
        </>
    );
            }
};

export default Navbar;
