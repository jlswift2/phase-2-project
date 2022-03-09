import React, { useState, useEffect } from "react";
import EntryCard from "./EntryCard";

function Home({ user, handleSetUser }) {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const userStatus = JSON.parse(localStorage.getItem("journalUser"));
    fetch("http://localhost:8002/journals")
    .then(res => res.json())
    .then(data => {
      setEntries(data);
      handleSetUser(userStatus);
    });
  }, []);

  console.log("home", user)

  const handleFilterChange = event => {
    setFilter(event.target.value);
  }

  const renderFilteredEntries = filter => {
    if (filter === "All") return entries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);

    else if (filter === "Your Entries") {
      const filteredEntries = entries.filter(entry => entry.author === user.username);
      return filteredEntries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);
    }

    const filteredEntries = entries.filter(entry => entry.mood === filter);
    return filteredEntries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);
  }


  
  return (
    <div>
      <h1>Home Page</h1>
      <form onChange={handleFilterChange}>
        <label htmlFor="filter">Filter by: </label>
        <select name="filter">
          <option value="All">All</option>
          {user ? <option value="Your Entries">Your Entries</option> : null}
          <option value="Happy">Happy</option>
          <option value="Tired">Tired</option>
          <option value="Sad">Sad</option>
          <option value="Excitement">Excitement</option>
          <option value="Contempt">Contempt</option>
          <option value="Stressed">Stressed</option>
        </select>
      </form>

      {renderFilteredEntries(filter)}
    </div>
  )
}

export default Home;
