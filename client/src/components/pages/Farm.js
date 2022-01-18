import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";


import "../../utilities.css";
import "./Farm.css";
import { get } from "../../utilities";

// Defines the Farm component

const Farm = ( props ) => {
  const [farm, setFarm] = useState([]);

  useEffect(() => {
    document.title = "Farm";
    get("/api/farm", {googleid: props.userGoogleId}).then((farmObj) => {
      setFarm(farmObjs);

    });
  }, []);


  return (
    <>

    {props.userName ? (
      <>
      {<NewTask addNewTask={addNewTask} userGoogleId={props.userGoogleId}/>}
      {tasksList}
      </>
    ) : (
      <>
      <h1 className="u-Center"> You are not logged in. Please log in to view your tasks.</h1>
      </>
    )}
    </>
  );
};



export default Farm;