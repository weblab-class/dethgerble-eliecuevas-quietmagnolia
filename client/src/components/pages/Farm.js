import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import NewFarm from "../modules/NewFarm.js";


import "../../utilities.css";
import "./Farm.css";
import { get, post } from "../../utilities";

// Defines the Farm component

let test = "hello"
let flag = true;

const Farm = ( props ) => {


   const [farm, setFarm] = useState([]);

    document.title = "Farm";
    let test = "hi";
    //console.log(props.googleid);
    get("/api/farms", {googleid: props.userGoogleId}).then((farmObj) => {
      //console.log("here");
      setFarm(farmObj);

    });


  const addNewFarm = (farmObj) => {
    setFarm([farmObj]);
  }

  //console.log(farm)
  const isArray1 = Array.isArray(farm);

  // if (isArray1){
  //   test = "yes";
  //   const body1 = {googleid: props.userGoogleId, farm: ["hello", "goodbye"]};
  //   post("/api/farm", body1).then((farm) => {
  //   let farm1 = farm
  //   console.log(farm.farm.length)
  //   });
  // };

  const farmExists = farm.length !== 0;
  if (farmExists) {

    //console.log("Farm exists");
    test = farm.toString();

  } else {

    const flag2 = (props.userGoogleId instanceof String);

    if (flag){
      if (flag2){

    //console.log("Farm doesn't exist");

    const newFarm = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) { 
        row[j] = '-'
      }
      newFarm[i] = row;
    
    }

    const body1 = {googleid: props.userGoogleId , farm: newFarm};
    flag = false;

    post("/api/farm", body1).then((farm) => {
        //console.log("New Farm Made");
    });

  }
    }
  }

  return (
    <>

    {props.userName ? (
      <>
      <p> {test} </p>
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