import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";


import "../../utilities.css";
import { get, post } from "../../utilities";
import "./Stats.css";
import { getfirstname, getphrase2 } from "../modules/FunFunctions.js";


// Defines the Stats component

const Stats = (props) => {
  const [firstName, setFirstName] = useState("[Loading...]");
  const [titlePhrase, setTitlePhrase] = useState("[Loading...]");
  const [tasksCompleted, setTasksCompleted] = useState("Your First Task doesn't count! Make more!");

  useEffect(() => {
    if (props.userName) {
      setFirstName(getfirstname(props.userName));

    }
  }, [props.userName]);

  useEffect(() => {
    if (firstName !== "[Loading...]"){
      setTitlePhrase(getphrase2(firstName));
    };
  }, );

  useEffect(() => {
    if (props.userGoogleId){
    get("/api/stats", {googleid: props.userGoogleId}).then((statsObj) => {
      setTasksCompleted(statsObj[0].taskscompleted);
    });
  };
  }, );

  
  return (
    <>
  {props.userName ? (
    <>
    <h1 className = "Titles"> {titlePhrase} </h1>
    <h2 className = "Titles"> Here are your stats.</h2>

    <p className = "BodyText"> Tasks Completed: <b>{tasksCompleted}</b></p>
    <p className = "WayDownHere"> hi mom</p>
    

    </>
  ) : (
    <>
    <h1 className="u-Center"> You are not logged in. Please log in to view your stats.</h1>
    </>
  )}  
  </>
  );
};

export default Stats;