import "./ButtonMenu.css";
import React from "react";

import "./Nav.css"; 

const Nav = () => (


<span className = "MenuSpan">

<ul>
  <li><a href="/tasks" data-title="home">Tasks</a></li>
  <li><a href="/farm" data-title="About">Farm</a></li>
  <li><a href="/friends" data-title="Portfolio">Friends</a></li>
  <li><a href="/stats" data-title="Blog">Stats</a></li>
  <li><a href="/profile" data-title="Blog">Profile</a></li>
  <li><a href="/about" data-title="Blog">About</a></li>
</ul>

</span>
);

export default Nav;