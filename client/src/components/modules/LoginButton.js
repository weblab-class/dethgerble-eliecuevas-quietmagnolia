import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./LoginButton.css"; 

//TODO: REPLACE WITH YOUR OWN CLIENT_ID (DONE - Elie)
const GOOGLE_CLIENT_ID = "65119842375-qsvmlu1p97jbaccqj2hlgji2qaeesp7i.apps.googleusercontent.com";

const LoginButton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      {userId ? (
        <span className = "GoogleButton">
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}

          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
        </span>
      ) : (
        <span className = "GoogleButton">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
        </span>
      )}
    </>
  );
};

export default LoginButton;