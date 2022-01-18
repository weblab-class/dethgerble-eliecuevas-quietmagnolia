import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import NewFarm from "../modules/NewFarm.js";


import "../../utilities.css";
import "./Farm.css";
import { get, post } from "../../utilities";

// Defines the Farm component

let test = "hello"
let flag = true;
let array1 = "Loading"
let array2 = "Loading"
let array3 = "Loading"
let array4 = "Loading"
let array5 = "Loading"
let array6 = "Loading"
let array7 = "Loading"
let array8 = "Loading"
let array9 = "Loading"
let array10 = "Loading"


const Farm = ( props ) => {

//console.log(props.userGoogleId)

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

    console.log("Farm exists");
    console.log(farm[0].farm[1]);
    array1 = farm[0].farm[0].toString();
    array2 = farm[0].farm[1].toString();
    array3 = farm[0].farm[2].toString();
    array4 = farm[0].farm[3].toString();
    array5 = farm[0].farm[4].toString();
    array6 = farm[0].farm[5].toString();
    array7 = farm[0].farm[6].toString();
    array8 = farm[0].farm[7].toString();
    array9 = farm[0].farm[8].toString();
    array10 = farm[0].farm[9].toString();

    console.log(array1);
    

  } else {



    console.log("Farm doesn't exist");

    const newFarm = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) { 
        row[j] = '-'
      }
      newFarm[i] = row;
    
    }

    console.log(props.userGoogleId)
    const body1 = {googleid: props.userGoogleId , farm: newFarm};
    flag = false;

    post("/api/farm", body1).then((farm) => {
        //console.log("New Farm Made");
    });

    array1 = newFarm[0].toString();
    array2 = newFarm[1].toString();
    array3 = newFarm[2].toString();
    array4 = newFarm[3].toString();
    array5 = newFarm[4].toString();
    array6 = newFarm[5].toString();
    array7 = newFarm[6].toString();
    array8 = newFarm[7].toString();
    array9 = newFarm[8].toString();
    array10 = newFarm[9].toString();

    console.log(array1);

  }


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