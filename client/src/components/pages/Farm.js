import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import NewFarm from "../modules/NewFarm.js";


import "../../utilities.css";
import "./Farm.css";
import { get, post } from "../../utilities";

// Defines the Farm component

let test = "hello"


const Farm = ( props ) => {

//console.log(props.userGoogleId)
  const [array1, setArray1] = useState("Loading");
  const [array2, setArray2] = useState("Loading");
  const [array3, setArray3] = useState("Loading");
  const [array4, setArray4] = useState("Loading");
  const [array5, setArray5] = useState("Loading");
  const [array6, setArray6] = useState("Loading");
  const [array7, setArray7] = useState("Loading");
  const [array8, setArray8] = useState("Loading");
  const [array9, setArray9] = useState("Loading");
  const [array10, setArray10] = useState("Loading");

   const [farm, setFarm] = useState([]);




   
    document.title = "Farm";
    let test = "hi";
    //console.log(props.googleid);


    useEffect(() => {
      if (props.userGoogleId) {
    get("/api/farms", {googleid: props.userGoogleId}).then((farmObj) => {
      setFarm(farmObj);

    });
    }}, [props.userGoogleId]);





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

  useEffect(() => {

  const farmExists = farm.length !== 0;
  console.log("Searching for existing farm...");
  if (farmExists) {

    console.log("Farm exists");

    //console.log(farm[0].farm[1]);
    setArray1 ( farm[0].farm[0].toString());
    setArray2 ( farm[0].farm[1].toString());
    setArray3 ( farm[0].farm[2].toString());
    setArray4 ( farm[0].farm[3].toString());
    setArray5 ( farm[0].farm[4].toString());
    setArray6 ( farm[0].farm[5].toString());
    setArray7 ( farm[0].farm[6].toString());
    setArray8 ( farm[0].farm[7].toString());
    setArray9 ( farm[0].farm[8].toString());
    setArray10 ( farm[0].farm[9].toString());

    //console.log(array1);
    

  } else {

    


    if (props.userGoogleId) {
      console.log("Farm doesn't exist: Creating new farm...");
    const newFarm = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) { 
        row[j] = '-'
      }
      newFarm[i] = row;
    
    }

    //console.log(props.userGoogleId)
    const body1 = {googleid: props.userGoogleId , farm: newFarm};

    post("/api/farm", body1).then((farm) => {
        console.log("New Farm Made");
    });

    setArray1 ( newFarm[0].toString());
    setArray2 ( newFarm[1].toString());
    setArray3 ( newFarm[2].toString());
    setArray4 ( newFarm[3].toString());
    setArray5 ( newFarm[4].toString());
    setArray6 ( newFarm[5].toString());
    setArray7 ( newFarm[6].toString());
    setArray8 ( newFarm[7].toString());
    setArray9 ( newFarm[8].toString());
    setArray10 ( newFarm[9].toString());

    // console.log(array1);
  }


  };
}, [farm]);

  // (async() => {
  //   while(!window.hasOwnProperty(array1)){
  //   await new Promise(resolve => setTimeout(resolve,1000));
  //   }
  // })();

  // function waitForArray1(){
  //   if (typeof array1 !== "undefined"){
  //     console.log('yes');
  //   } else{
  //     setTimeout(waitForArray1, 250);
  //   }
  // }
  
  // waitForArray1();
  
  return (
    <>




    {props.userName ? (
      <>
      <p> {array1} </p>
      <p> {array2} </p>
      <p> {array3} </p>
      <p> {array4} </p>
      <p> {array5} </p>
      <p> {array6} </p>
      <p> {array7} </p>
      <p> {array8} </p>
      <p> {array9} </p>
      <p> {array10} </p>
      </>
    ) : (
      <>
      <h1 className="u-Center"> You are not logged in. Please log in to view your farm.</h1>
      </>
    )}
    </>
  );
};



export default Farm;