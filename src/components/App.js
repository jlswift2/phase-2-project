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

  console.log(user)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/NewEntry">
          <NewEntry user={user}/>
        </Route>
        <Route exact path="/Entry/:id">
          <Entry user={user}/>
        </Route>
        <Route exact path="/Entry/:id/Edit">
          <NewEntry user={user}/>
        </Route>
        <Route path="/">
          <Home user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
