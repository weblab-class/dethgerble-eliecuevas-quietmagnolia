import React, { useState, useEffect, Component } from "react";
import WelcomeImage1 from "../images/welcomefarm1.jpg";
import NewFarm from "../modules/NewFarm.js";
import piggy from "../images/pigTransparent.png";
import grassBackground from "../images/grass-background.jpg";
import transparent from "../images/HD_transparent_picture.png";
import barn from "../images/barnpng.png";
import silo from "../images/pixel-silo-removebg-preview.png";
import cow from "../images/cowwww.png";
import wheat from "../images/wheatttt.png";
import goat from "../images/goattt.png";
import chicken from "../images/chickennn.png";
import pond from "../images/ponddd.png";
import farmhouse from "../images/farmhouseee.png";
import horse from "../images/horseee.png";
import dog from "../images/doggg.png";
import cat from "../images/cattt.png";
import house from "../images/houseee.png";
import barn2 from "../images/barnn.png";
import bamboo from "../images/bambooo.png";
import tractor from "../images/tractorrr.png";
import corn from "../images/cornnn.png";
import bunnyup from "../images/bunnyup.png";
import bunnydown from "../images/bunnydown.png";
import combine from "../images/combineee.png";
import ox from "../images/oxx.png";

import "../../utilities.css";
import "./Farm.css";
import { get, post } from "../../utilities";

// Defines the Farm component

// function decideImage(number){
//   if (number === "-"){
//     return WelcomeImage1;
//   }
//   if (number === 18){
//     return piggy;
//   }
// }

let decideImage = {
  "-": transparent,
  0: ox,
  1: bunnydown,
  2: cow,
  3: dog,
  4: horse,
  5: wheat,
  6: chicken,
  7: goat,
  8: barn,
  9: bunnyup,
  10: tractor,
  11: house,
  12: corn,
  13: silo,
  14: barn2,
  15: cat,
  16: bamboo,
  17: farmhouse,
  18: piggy,
  19: pond,
  20: combine,
};


const Farm = ( props ) => {

//console.log(props.userGoogleId)
  const [array1, setArray1] = useState("Loading");
  const [array2, setArray2] = useState("Loading");
  const [array3, setArray3] = useState(["-","-","-","-","-","-","-","-","-","-",]);
  const [array4, setArray4] = useState("Loading");
  const [array5, setArray5] = useState("Loading");
  const [array6, setArray6] = useState("Loading");
  const [array7, setArray7] = useState("Loading");
  const [array8, setArray8] = useState("Loading");
  const [array9, setArray9] = useState("Loading");
  const [array10, setArray10] = useState("Loading");

   const [farm, setFarm] = useState([]);

  const [value32, setValue32] = useState("Loading");
  








   
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
  //console.log("Searching for existing farm...");
  if (farmExists) {

    //console.log("Farm exists");

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

    //console.log("trying" + array3.toString())
    //setValue32(decideImage(array3[2]));

    //console.log(array1);
    

  } else {

    


    if (props.userGoogleId) {
      //console.log("Farm doesn't exist: Creating new farm...");
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
        //console.log("New Farm Made");
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

    //setValue32(decideImage(array3[2]));
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
  let value18 = piggy;

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
          <div className="colArowA"><img className = "farm" src = {decideImage[array1[0]]}></img></div>
          <div className="colArowB"><img className = "farm" src = {decideImage[array1[1]]}></img></div>
          <div className="colArowC"><img className = "farm" src = {decideImage[array1[2]]}></img></div>
          <div className="colArowD"><img className = "farm" src = {decideImage[array1[3]]}></img></div>
          <div className="colArowE"><img className = "farm" src = {decideImage[array1[4]]}></img></div>
          <div className="colArowF"><img className = "farm" src = {decideImage[array1[5]]}></img></div>
          <div className="colArowG"><img className = "farm" src = {decideImage[array1[6]]}></img></div>
          <div className="colArowH"><img className = "farm" src = {decideImage[array1[7]]}></img></div>
          <div className="colArowI"><img className = "farm" src = {decideImage[array1[8]]}></img></div>
          <div className="colArowJ"><img className = "farm" src = {decideImage[array1[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colBrowA"><img className = "farm" src = {decideImage[array2[0]]}></img></div>
          <div className="colBrowB"><img className = "farm" src = {decideImage[array2[1]]}></img></div>
          <div className="colBrowC"><img className = "farm" src = {decideImage[array2[2]]}></img></div>
          <div className="colBrowD"><img className = "farm" src = {decideImage[array2[3]]}></img></div>
          <div className="colBrowE"><img className = "farm" src = {decideImage[array2[4]]}></img></div>
          <div className="colBrowF"><img className = "farm" src = {decideImage[array2[5]]}></img></div>
          <div className="colBrowG"><img className = "farm" src = {decideImage[array2[6]]}></img></div>
          <div className="colBrowH"><img className = "farm" src = {decideImage[array2[7]]}></img></div>
          <div className="colBrowI"><img className = "farm" src = {decideImage[array2[8]]}></img></div>
          <div className="colBrowJ"><img className = "farm" src = {decideImage[array2[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colCrowA"><img className = "farm" src = {decideImage[array3[0]]}></img></div>
          <div className="colCrowB"><img className = "farm" src = {decideImage[array3[1]]}></img></div>
          <div className="colCrowC"><img className = "farm" src = {decideImage[array3[2]]}></img></div>
          <div className="colCrowD"><img className = "farm" src = {decideImage[array3[3]]}></img></div>
          <div className="colCrowE"><img className = "farm" src = {decideImage[array3[4]]}></img></div>
          <div className="colCrowF"><img className = "farm" src = {decideImage[array3[5]]}></img></div>
          <div className="colCrowG"><img className = "farm" src = {decideImage[array3[6]]}></img></div>
          <div className="colCrowH"><img className = "farm" src = {decideImage[array3[7]]}></img></div>
          <div className="colCrowI"><img className = "farm" src = {decideImage[array3[8]]}></img></div>
          <div className="colCrowJ"><img className = "farm" src = {decideImage[array3[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colDrowA"><img className = "farm" src = {decideImage[array4[0]]}></img></div>
          <div className="colDrowB"><img className = "farm" src = {decideImage[array4[1]]}></img></div>
          <div className="colDrowC"><img className = "farm" src = {decideImage[array4[2]]}></img></div>
          <div className="colDrowD"><img className = "farm" src = {decideImage[array4[3]]}></img></div>
          <div className="colDrowE"><img className = "farm" src = {decideImage[array4[4]]}></img></div>
          <div className="colDrowF"><img className = "farm" src = {decideImage[array4[5]]}></img></div>
          <div className="colDrowG"><img className = "farm" src = {decideImage[array4[6]]}></img></div>
          <div className="colDrowH"><img className = "farm" src = {decideImage[array4[7]]}></img></div>
          <div className="colDrowI"><img className = "farm" src = {decideImage[array4[8]]}></img></div>
          <div className="colDrowJ"><img className = "farm" src = {decideImage[array4[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colErowA"><img className = "farm" src = {decideImage[array5[0]]}></img></div>
          <div className="colErowB"><img className = "farm" src = {decideImage[array5[1]]}></img></div>
          <div className="colErowC"><img className = "farm" src = {decideImage[array5[2]]}></img></div>
          <div className="colErowD"><img className = "farm" src = {decideImage[array5[3]]}></img></div>
          <div className="colErowE"><img className = "farm" src = {decideImage[array5[4]]}></img></div>
          <div className="colErowF"><img className = "farm" src = {decideImage[array5[2]]}></img></div>
          <div className="colErowG"><img className = "farm" src = {decideImage[array5[2]]}></img></div>
          <div className="colErowH"><img className = "farm" src = {decideImage[array5[2]]}></img></div>
          <div className="colErowI"><img className = "farm" src = {decideImage[array5[2]]}></img></div>
          <div className="colErowJ"><img className = "farm" src = {decideImage[array5[2]]}></img></div>
       </div>
       <div class="row">
          <div className="colFrowA"><img className = "farm" src = {decideImage[array6[0]]}></img></div>
          <div className="colFrowB"><img className = "farm" src = {decideImage[array6[1]]}></img></div>
          <div className="colFrowC"><img className = "farm" src = {decideImage[array6[2]]}></img></div>
          <div className="colFrowD"><img className = "farm" src = {decideImage[array6[3]]}></img></div>
          <div className="colFrowE"><img className = "farm" src = {decideImage[array6[4]]}></img></div>
          <div className="colFrowF"><img className = "farm" src = {decideImage[array6[5]]}></img></div>
          <div className="colFrowG"><img className = "farm" src = {decideImage[array6[6]]}></img></div>
          <div className="colFrowH"><img className = "farm" src = {decideImage[array6[7]]}></img></div>
          <div className="colFrowI"><img className = "farm" src = {decideImage[array6[8]]}></img></div>
          <div className="colFrowJ"><img className = "farm" src = {decideImage[array6[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colGrowA"><img className = "farm" src = {decideImage[array7[0]]}></img></div>
          <div className="colGrowB"><img className = "farm" src = {decideImage[array7[1]]}></img></div>
          <div className="colGrowC"><img className = "farm" src = {decideImage[array7[2]]}></img></div>
          <div className="colGrowD"><img className = "farm" src = {decideImage[array7[3]]}></img></div>
          <div className="colGrowE"><img className = "farm" src = {decideImage[array7[4]]}></img></div>
          <div className="colGrowF"><img className = "farm" src = {decideImage[array7[5]]}></img></div>
          <div className="colGrowG"><img className = "farm" src = {decideImage[array7[6]]}></img></div>
          <div className="colGrowH"><img className = "farm" src = {decideImage[array7[7]]}></img></div>
          <div className="colGrowI"><img className = "farm" src = {decideImage[array7[8]]}></img></div>
          <div className="colGrowJ"><img className = "farm" src = {decideImage[array7[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colHrowA"><img className = "farm" src = {decideImage[array8[0]]}></img></div>
          <div className="colHrowB"><img className = "farm" src = {decideImage[array8[1]]}></img></div>
          <div className="colHrowC"><img className = "farm" src = {decideImage[array8[2]]}></img></div>
          <div className="colHrowD"><img className = "farm" src = {decideImage[array8[3]]}></img></div>
          <div className="colHrowE"><img className = "farm" src = {decideImage[array8[4]]}></img></div>
          <div className="colHrowF"><img className = "farm" src = {decideImage[array8[5]]}></img></div>
          <div className="colHrowG"><img className = "farm" src = {decideImage[array8[6]]}></img></div>
          <div className="colHrowH"><img className = "farm" src = {decideImage[array8[7]]}></img></div>
          <div className="colHrowI"><img className = "farm" src = {decideImage[array8[8]]}></img></div>
          <div className="colHrowJ"><img className = "farm" src = {decideImage[array8[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colIrowA"><img className = "farm" src = {decideImage[array9[0]]}></img></div>
          <div className="colIrowB"><img className = "farm" src = {decideImage[array9[1]]}></img></div>
          <div className="colIrowC"><img className = "farm" src = {decideImage[array9[2]]}></img></div>
          <div className="colIrowD"><img className = "farm" src = {decideImage[array9[3]]}></img></div>
          <div className="colIrowE"><img className = "farm" src = {decideImage[array9[4]]}></img></div>
          <div className="colIrowF"><img className = "farm" src = {decideImage[array9[5]]}></img></div>
          <div className="colIrowG"><img className = "farm" src = {decideImage[array9[6]]}></img></div>
          <div className="colIrowH"><img className = "farm" src = {decideImage[array9[7]]}></img></div>
          <div className="colIrowI"><img className = "farm" src = {decideImage[array9[8]]}></img></div>
          <div className="colIrowJ"><img className = "farm" src = {decideImage[array9[9]]}></img></div>
       </div>
       <div class="row">
          <div className="colJrowA"><img className = "farm" src = {decideImage[array10[0]]}></img></div>
          <div className="colJrowB"><img className = "farm" src = {decideImage[array10[1]]}></img></div>
          <div className="colJrowC"><img className = "farm" src = {decideImage[array10[2]]}></img></div>
          <div className="colJrowD"><img className = "farm" src = {decideImage[array10[3]]}></img></div>
          <div className="colJrowE"><img className = "farm" src = {decideImage[array10[4]]}></img></div>
          <div className="colJrowF"><img className = "farm" src = {decideImage[array10[5]]}></img></div>
          <div className="colJrowG"><img className = "farm" src = {decideImage[array10[6]]}></img></div>
          <div className="colJrowH"><img className = "farm" src = {decideImage[array10[7]]}></img></div>
          <div className="colJrowI"><img className = "farm" src = {decideImage[array10[8]]}></img></div>
          <div className="colJrowJ"><img className = "farm" src = {decideImage[array10[9]]}></img></div>
       </div>
      </div>
      <img className = "background" src = {grassBackground}></img>
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