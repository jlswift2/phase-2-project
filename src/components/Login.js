import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
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

    fetch("http://localhost:8002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("journalUser", JSON.stringify(data));
      history.push("/");
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username"></input>
        <input type="text" name="favAnimal" value={userData.favAnimal} onChange={handleChange} placeholder="FAVORITE ANIMAL?"></input>
        <button>Sign Up</button>
      </form>
    </div>
  ) 
}

export default Login;
