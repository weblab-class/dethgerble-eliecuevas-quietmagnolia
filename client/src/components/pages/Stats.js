import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";


import "../../utilities.css";
import "./Stats.css";
import { getfirstname, getphrase2 } from "../modules/FunFunctions.js";


// Defines the Stats component

const Stats = (props) => {


  return (
    <>
 
    <h1> {statsMessage} </h1>

    </>
  );
};

export default Stats;