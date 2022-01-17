import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";


import "../../utilities.css";
import "./Profile.css";

// Defines the Profile component

const Profile = () => {


  return (
    <>
 
    <img className = "WelcomeImage" src = {WelcomeImage1}/>

    </>
  );
};

export default Profile;