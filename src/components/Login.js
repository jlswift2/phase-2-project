import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

function Login({ handleSetUser, signUp }) {
  const [userData, setUserData] = useState({
    username: "",
    favAnimal: ""
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8002/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
    });
  }, []);

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    //if they're signing up for an account
    if (signUp){
      const checkUsers = users.findIndex(user => user.username === userData.username);
      //checks the registered users to see if their name is available
      if (checkUsers === -1){
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
          handleSetUser(data);
          history.push("/");
        });
      }
      else {
        //tell user their name is already taken
        setError("Sorry, that username is already taken :(");
      }
    }

    //user is logging in
    else {
      //check the registered users to see if their username is typed correctly
      const checkUsers = users.find(user => user.username === userData.username);

      //their username is typed correctly
      if (checkUsers){
        //check if their "password" (fav animal) matches the user we found
        const favAnimal = checkUsers.favAnimal === userData.favAnimal;

        if (favAnimal){
          localStorage.setItem("journalUser", JSON.stringify(userData));
          handleSetUser(userData);
          history.push("/");
        }

        else {
          setError("That is not your favorite animal. Did it change since you made an account? :O");
        }
      }

      //their username wasn't found in our users database
      else{
        setError("That username is not in our database :(");
      }
    }
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
      {error ? error : null}
      {handleSignUp(signUp)}
    </div>
  ) 
}

export default Login;
