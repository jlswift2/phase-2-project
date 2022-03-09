import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NewEntry from "./NewEntry";
import Holder from "./Holder";
import Entry from "./Entry";
import Footer from "./Footer";

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
        <Route exact path="/Entry/:id">
          <Entry />
        </Route>
        <Route exact path="/Entry/:id/Edit">
          <NewEntry />
        </Route>
       </Switch>
       <Footer />
    </div>
  );
}

export default App;
