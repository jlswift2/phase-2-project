import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

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
        Already have an account? <Link to="/Login">Log In</Link>
      </>
    );
    else return (
      <>
        Don't have an account yet? <Link to="/SignUp">Sign Up</Link>
      </>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username"></input>
        <input type="text" name="favAnimal" value={userData.favAnimal} onChange={handleChange} placeholder="FAVORITE ANIMAL?"></input>
        <button>{signUp ? "Sign Up" : "Log In"}</button>
      </form>
      {handleSignUp(signUp)}
    </div>
  ) 
}

export default Login;
