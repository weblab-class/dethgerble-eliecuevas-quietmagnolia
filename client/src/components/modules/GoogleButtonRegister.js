import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./GoogleButtonRegister.css"; 

//TODO: REPLACE WITH YOUR OWN CLIENT_ID (DONE - Elie)
const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";

const GoogleButtonRegister = (props) => {
  return (
    <>

        <span className = "GoogleButtonRegister">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={props.handleLogin}
          onFailure={(err) => console.log(err)}
        />
        </span>
    </>
  );
};

export default GoogleButtonRegister;