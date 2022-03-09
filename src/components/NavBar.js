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
          user === null ? <li className="nav-item"> <NavLink style={{ textDecoration: 'none' }} to="/Login">Log In</NavLink> </li>
          : <li className="nav-item"> <NavLink style={{ textDecoration: 'none' }} to="/" onClick={() => logoutUser()}>Log Out</NavLink> </li>
      }
          <li className="nav-item"> <NavLink  style={{ textDecoration: 'none' }} to="/">Home</NavLink> </li>
          <li className="nav-item"> <NavLink style={{ textDecoration: 'none' }} to="/NewEntry">New Entry</NavLink> </li>
        </ul>
      </nav>
  )

  //function NavBar() {
//   return( 
//     <div className="navbar">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/NewEntry">New Entry</NavLink>
//       {
//         user === null ? <NavLink to="/Login">Log In</NavLink>
//         : <NavLink to="/" onClick={() => logoutUser()}>Log Out</NavLink>
//       }
//     </div>
//   );
}

export default NavBar;
