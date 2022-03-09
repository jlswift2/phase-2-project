import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
      <nav id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item"> <NavLink style={{ textDecoration: 'none' }} to="/Holder">Holder</NavLink> </li>
          <li className="nav-item"> <NavLink  style={{ textDecoration: 'none' }} to="/">Home</NavLink> </li>
          <li className="nav-item"> <NavLink style={{ textDecoration: 'none' }} to="/NewEntry">New Entry</NavLink> </li>
        </ul>
      </nav>
  )
}

export default NavBar;
