import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import logo from "../logo/logo2.jpeg";
function Login({ handleSetUser, signUp }) {
  const [userData, setUserData] = useState({
    username: "",
    favAnimal: ""
  });

  const history = useHistory();

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("journalUser", JSON.stringify(userData));
    handleSetUser(userData);
    history.push("/");
    console.log("login");

  }

  const handleSignUp = signUp => {
    if (signUp) return (
      <>
        Already have an account? <button> <Link to="/Login" style={{ textDecoration: 'none', color: "inherit" }}>Log In</Link> </button>
      </>
    );
    else return (
      <>
        Don't have an account yet?  <button> <Link to="/SignUp" style={{ textDecoration: 'none', color: "inherit"}}>Sign Up</Link> </button>
      </>
    );
  }

  return (
    <div id="loginContainer">
      <div id="loginContent">
        <img id="logo" src={logo} alt="logo"/>
        <form onSubmit={handleSubmit}>
          <div id="inputContainer">
            <input className="inputBox" type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Enter Username..."></input>
            <input className="inputBox" type="text" name="favAnimal" value={userData.favAnimal} onChange={handleChange} placeholder="Enter Favorite Animal..."></input>
          </div>
          <br/>
          <br/>
          <button className="btn1">{signUp ? "Sign Up" : "Log In"}</button>
        </form>
        <div style={{ textAlign: "center",borderTop: "1px solid",paddingTop:"15px"}} className="btn2">
          {handleSignUp(signUp)}
        </div>
      </div>
    </div>
  )
}

export default Login;
