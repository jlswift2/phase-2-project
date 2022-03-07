import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <NavLink to="/Holder">Holder</NavLink>

    <NavLink to="/">Home</NavLink>
    
    <NavLink to="/NewEntry">New Entry</NavLink>
    </div>);
}

export default NavBar;
