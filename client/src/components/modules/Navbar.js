import React, { Component } from "react";

import "../../utilities.css";
import "./Navbar.css";
import "./ButtonMenu.js";
import ButtonMenu from "./ButtonMenu.js";
import LoginButton from "./LoginButton.js";
import "./LoginButton.css";


const Navbar = () => (

    <>
    <span className = "Navbar">
    <h1 className = "Background"> </h1>
    <h1 className = "Logo"> evolve.io </h1>
    <LoginButton/>

    <h1 className = "MenuText"> Menu </h1>

    <ButtonMenu/>
    </span>
    </>

);

export default Navbar;
