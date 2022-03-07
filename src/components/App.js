import React from "react";
import EntryDisplay from "./EntryDisplay"
import NewEntryForm from "./NewEntryForm"
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <EntryDisplay />
      <NewEntryForm />
    </div>
  );
}

export default App;
