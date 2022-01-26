import "./ButtonMenu.css";
import React from "react";

import "./Nav.css"; 

const Nav = () => (


<span className = "MenuSpan">

<ul>
  <li><a className = "nav" href="/tasks" data-title="home">Tasks</a></li>
  <li><a className = "nav" href="/farm" data-title="About">Farm</a></li>
  <li><a className = "nav" href="/friends" data-title="Portfolio">Friends</a></li>
  <li><a className = "nav" href="/stats" data-title="Blog">Stats</a></li>
  <li><a className = "nav" href="/profile" data-title="Blog">Profile</a></li>
  <li><a className = "nav" href="/about" data-title="Blog">About</a></li>
</ul>

</span>
);

export default Nav;