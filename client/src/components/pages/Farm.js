import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";


import "../../utilities.css";
import "./Farm.css";

// Defines the Farm component

const Farm = () => {


  return (
    <>
 
    <img className = "WelcomeImage" src = {WelcomeImage1}/>

    </>
  );
};

export default Farm;