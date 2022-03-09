import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/NewEntry">New Entry</NavLink>
    <NavLink to="/Login">Log In</NavLink>
    </div>);
}

export default NavBar;
