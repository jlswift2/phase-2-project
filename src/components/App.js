import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NewEntry from "./NewEntry";
import Holder from "./Holder";

function App() {


  return (
    <div className="App">
      <Header /> 
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
