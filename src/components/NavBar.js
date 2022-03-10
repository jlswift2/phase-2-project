import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({ user, handleSetUser }) {
  const history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem("journalUser");
    handleSetUser(null);
    history.push("/");
  }
  
  return (
      <nav id="navbarSupportedContent">
        <ul className="navbar-nav">
      {
          user === null ? <li className="nav-item"> <NavLink style={{ textDecoration: 'none', color: "inherit" }} to="/Login">Log In</NavLink> </li>
          : <li className="nav-item"> <NavLink style={{ textDecoration: 'none', color: "inherit" }} to="/" onClick={() => logoutUser()}>Log Out</NavLink> </li>
      }
          <li className="nav-item"> <NavLink  style={{ textDecoration: 'none', color: "inherit" }} to="/">Home</NavLink> </li>
          <li className="nav-item"> <NavLink  style={{ textDecoration: 'none', color: "inherit" }} to="/Mission">Mission</NavLink> </li>
          <li className="nav-item"> <NavLink style={{ textDecoration: 'none', color: "inherit" }} to="/NewEntry">New Bubble</NavLink> </li>
        </ul>
      </nav>
  )
}

export default NavBar;
