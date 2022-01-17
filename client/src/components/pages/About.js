import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";


import "../../utilities.css";
import "./About.css";

// Defines the About component

const About = () => {


  return (
    <>
 
    <img className = "WelcomeImage" src = {WelcomeImage1}/>

    </>
  );
};

export default About;