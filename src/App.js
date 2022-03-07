import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewEntry from "./components/NewEntry";
import Holder from "./components/Holder";


function App() {




  return (
    <div className="App">
      <NavBar /> 
      <Switch>
        <Route path="/Holder">
          <Holder />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/NewEntry">
          <NewEntry />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
