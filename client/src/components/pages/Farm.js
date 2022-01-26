import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import NewFarm from "../modules/NewFarm.js";


import "../../utilities.css";
import "./Farm.css";
import { get, post } from "../../utilities";

// Defines the Farm component




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
    setArray1 ( farm[0].farm[0]);
    setArray2 ( farm[0].farm[1]);
    setArray3 ( farm[0].farm[2]);
    setArray4 ( farm[0].farm[3]);
    setArray5 ( farm[0].farm[4]);
    setArray6 ( farm[0].farm[5]);
    setArray7 ( farm[0].farm[6]);
    setArray8 ( farm[0].farm[7]);
    setArray9 ( farm[0].farm[8]);
    setArray10 ( farm[0].farm[9]);

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

    setArray1 ( newFarm[0]);
    setArray2 ( newFarm[1]);
    setArray3 ( newFarm[2]);
    setArray4 ( newFarm[3]);
    setArray5 ( newFarm[4]);
    setArray6 ( newFarm[5]);
    setArray7 ( newFarm[6]);
    setArray8 ( newFarm[7]);
    setArray9 ( newFarm[8]);
    setArray10 ( newFarm[9]);

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
      {/* <p> {array1} </p>
      <p> {array2} </p>
      <p> {array3} </p>
      <p> {array4} </p>
      <p> {array5} </p>
      <p> {array6} </p>
      <p> {array7} </p>
      <p> {array8} </p>
      <p> {array9} </p>
      <p> {array10} </p> */}
      <div class="flex-grid">
        <div class="row">
          <div class="col">{array1[0]}</div>
          <div class="col">{array1[1]}</div>
          <div class="col">{array1[2]}</div>
          <div class="col">{array1[3]}</div>
          <div class="col">{array1[4]}</div>
          <div class="col">{array1[5]}</div>
          <div class="col">{array1[6]}</div>
          <div class="col">{array1[7]}</div>
          <div class="col">{array1[8]}</div>
          <div class="col">{array1[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array2[0]}</div>
          <div class="col">{array2[1]}</div>
          <div class="col">{array2[2]}</div>
          <div class="col">{array2[3]}</div>
          <div class="col">{array2[4]}</div>
          <div class="col">{array2[5]}</div>
          <div class="col">{array2[6]}</div>
          <div class="col">{array2[7]}</div>
          <div class="col">{array2[8]}</div>
          <div class="col">{array2[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array3[0]}</div>
          <div class="col">{array3[1]}</div>
          <div class="col">{array3[2]}</div>
          <div class="col">{array3[3]}</div>
          <div class="col">{array3[4]}</div>
          <div class="col">{array3[5]}</div>
          <div class="col">{array3[6]}</div>
          <div class="col">{array3[7]}</div>
          <div class="col">{array3[8]}</div>
          <div class="col">{array3[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array4[0]}</div>
          <div class="col">{array4[1]}</div>
          <div class="col">{array4[2]}</div>
          <div class="col">{array4[3]}</div>
          <div class="col">{array4[4]}</div>
          <div class="col">{array4[5]}</div>
          <div class="col">{array4[6]}</div>
          <div class="col">{array4[7]}</div>
          <div class="col">{array4[8]}</div>
          <div class="col">{array4[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array5[0]}</div>
          <div class="col">{array5[1]}</div>
          <div class="col">{array5[2]}</div>
          <div class="col">{array5[3]}</div>
          <div class="col">{array5[4]}</div>
          <div class="col">{array5[5]}</div>
          <div class="col">{array5[6]}</div>
          <div class="col">{array5[7]}</div>
          <div class="col">{array5[8]}</div>
          <div class="col">{array5[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array6[0]}</div>
          <div class="col">{array6[1]}</div>
          <div class="col">{array6[2]}</div>
          <div class="col">{array6[3]}</div>
          <div class="col">{array6[4]}</div>
          <div class="col">{array6[5]}</div>
          <div class="col">{array6[6]}</div>
          <div class="col">{array6[7]}</div>
          <div class="col">{array6[8]}</div>
          <div class="col">{array6[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array7[0]}</div>
          <div class="col">{array7[1]}</div>
          <div class="col">{array7[2]}</div>
          <div class="col">{array7[3]}</div>
          <div class="col">{array7[4]}</div>
          <div class="col">{array7[5]}</div>
          <div class="col">{array7[6]}</div>
          <div class="col">{array7[7]}</div>
          <div class="col">{array7[8]}</div>
          <div class="col">{array7[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array8[0]}</div>
          <div class="col">{array8[1]}</div>
          <div class="col">{array8[2]}</div>
          <div class="col">{array8[3]}</div>
          <div class="col">{array8[4]}</div>
          <div class="col">{array8[5]}</div>
          <div class="col">{array8[6]}</div>
          <div class="col">{array8[7]}</div>
          <div class="col">{array8[8]}</div>
          <div class="col">{array8[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array9[0]}</div>
          <div class="col">{array9[1]}</div>
          <div class="col">{array9[2]}</div>
          <div class="col">{array9[3]}</div>
          <div class="col">{array9[4]}</div>
          <div class="col">{array9[5]}</div>
          <div class="col">{array9[6]}</div>
          <div class="col">{array9[7]}</div>
          <div class="col">{array9[8]}</div>
          <div class="col">{array9[9]}</div>
       </div>
       <div class="row">
          <div class="col">{array10[0]}</div>
          <div class="col">{array10[1]}</div>
          <div class="col">{array10[2]}</div>
          <div class="col">{array10[3]}</div>
          <div class="col">{array10[4]}</div>
          <div class="col">{array10[5]}</div>
          <div class="col">{array10[6]}</div>
          <div class="col">{array10[7]}</div>
          <div class="col">{array10[8]}</div>
          <div class="col">{array10[9]}</div>
       </div>
      </div>
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