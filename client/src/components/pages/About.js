import React, { useState, useEffect, Component } from "react";
import dylan_ryan from "../images/dylan_ryan.jpg";
import elie_cuevas from "../images/elie_cuevas.jpg";
import jake_jones from "../images/jake_jones.jpg";


import "../../utilities.css";
import "./About.css";

// Defines the About component

const About = () => {


  return (
    <>
 
    
    (
        <>
        <div className = "AboutWrapper">
        <h1 className = "AboutTop"> About <span className = "LogoTutorial" >uevolve</span></h1>
        <h2> <span className = "LogoAbout"><b>uevolve</b></span> is a website we created to be a fun tool to plan with and as way to learn.</h2>
        
        <p> <span className = "LogoAbout"><b>uevolve</b></span> is a productivity manager, where you can see your completed tasks immortalized in your own personal digital farm. As you do more of what you need to do, watch your farm develop.</p>
        </div>

       

  <section class="about-container">

  <h3 class='developer-label'>
    Meet the Developers!
  </h3>

  <div class="about-card">
    <div class="about-info">
      <h5 class='about-name'>Elie Cuevas</h5>
      <img className = "about-image" src = {elie_cuevas}/>
      <p class='about-text'>
        MIT Student studying Computer Science and Management. Other interests include urban planning, philosophy, and of course, the Premier League.

      </p>
      <p class='about-text'>
        Contact: <br></br>
        cuevasel@gmail.com
      </p>
    </div>
  </div>

  <div class='about-card'>
  <div class="about-info">
      <h5 class='about-name'>Jake Jones</h5>
      <img className = "about-image" src = {jake_jones}/>
      <p class='about-text'>
      Student at MIT studying Computer Science, Business Analytics, and Statistics and Data Science.
      Member of the Varsity Basketball team and the Sloan Business Club.
      </p>
      <p class='about-text'>
        Contact:<br></br>
        jakemjones2020@gmail.com
      </p>
    </div>
  </div>

  <div class='about-card'>
  <div class="about-info">
      <h5 class='about-name'>Dylan Ryan</h5>
      <img className = "about-image" src = {dylan_ryan}/>
      <p class='about-text'>
        MIT student studying Mechanical Engineering and Computer Science. Member of the Varsity Men's Volleyball team. Interests include body mechanics and automation.
      </p>
      <p class='about-text'>
        Contact:<br></br>
      dylan.ryan2000@gmail.com
      </p>
    </div>
  </div>


</section>
        </>
      
          
    </>
  );
};

export default About;