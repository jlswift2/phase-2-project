import React, { useState, useEffect } from "react";
import EntryCard from "./EntryCard";


const moodArray = ["Happy","Tired","Sad","Excitement","Contempt","Stressed"]




function Home() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:8002/journals")
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  }

  const renderFilteredEntries = filter => {
    if (filter === "all") return entries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);

    const filteredEntries = entries.filter(entry => entry.mood === filter);
    return filteredEntries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);
  }

  const moodList = moodArray.map( mood => 
  <button id="moodFilter" onClick={(event) =>  setFilter(event.target.value)}>
    {mood}
  </button>);



  return (
    <div id="entryContainer">
      <h1>Home Page</h1>
      {moodList}
      <form onChange={handleFilterChange}>
        <label htmlFor="filter">Filter by: </label>
        <select name="filter">
          <option value="all">All</option>
          <option value="Happy">Happy</option>
          <option value="Tired">Tired</option>
          <option value="Sad">Sad</option>
          <option value="Excitement">Excitement</option>
          <option value="Contempt">Contempt</option>
          <option value="Stressed">Stressed</option>
        </select>
      </form>
      <div id="container">
      {renderFilteredEntries(filter)}
      </div>
    </div>
  )
}

export default Home;
