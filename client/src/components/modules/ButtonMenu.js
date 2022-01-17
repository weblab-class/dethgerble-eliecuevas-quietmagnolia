import "./ButtonMenu.css";
import React from "react";


const ButtonMenu = () => (
<nav class="btn-pluss-wrapper">
 <div href="#" className="btn-pluss">
  <ul>
    <li> <a href="/">Welcome</a> </li>
    <li><a href="/tasks">Tasks</a></li>
    <li><a href="/farm">Farm</a></li>
    <li><a href="/friends">Friends</a></li>
    <li><a href="/stats">Stats</a></li>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/about">About</a></li>
  </ul>
 </div>
</nav>

);

export default ButtonMenu