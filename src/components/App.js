import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NewEntry from "./NewEntry";
import Entry from "./Entry";
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStatus = JSON.parse(localStorage.getItem("journalUser"));
    setUser(userStatus);
  }, []);

  const handleSetUser = user => {
    setUser(user);
  }

  return (
    <div className="App">
      <Header user={user} handleSetUser={handleSetUser}/>
      <Switch>
        <Route exact path="/Login">
          <Login handleSetUser={handleSetUser}/>
        </Route>
        <Route exact path="/SignUp">
          <Login handleSetUser={handleSetUser} signUp={true}/>
        </Route>
        <Route exact path="/NewEntry">
          <NewEntry user={user} handleSetUser={handleSetUser}/>
        </Route>
        <Route exact path="/Entry/:id">
          <Entry user={user} handleSetUser={handleSetUser}/>
        </Route>
        <Route exact path="/Entry/:id/Edit">
          <NewEntry user={user} handleSetUser={handleSetUser}/>
        </Route>
        <Route path="/">
          <Home user={user} handleSetUser={handleSetUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
