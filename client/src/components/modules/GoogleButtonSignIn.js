import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./GoogleButtonSignIn.css"; 

//TODO: REPLACE WITH YOUR OWN CLIENT_ID (DONE - Elie)
const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";

const GoogleButtonSignIn = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>

        <span className = "GoogleButtonSignIn1">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
        </span>
    </>
  );
};

export default GoogleButtonSignIn;