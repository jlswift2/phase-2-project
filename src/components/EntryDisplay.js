import React, { useState, useEffect } from "react";
import EntryCard from "./EntryCard";


const moodArray = ["All", "Happy", "Tired", "Sad", "Excitement", "Loved", "Stressed"]

function EntryDisplay({ user, handleSetUser }) {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isDescending, setIsDescending] = useState(true)

  useEffect(() => {
    const userStatus = JSON.parse(localStorage.getItem("journalUser"));
    fetch("http://localhost:8002/journals")
      .then(res => res.json())
      .then(data => {
        setEntries(data)
        handleSetUser(userStatus);
      });
  }, []);

  useEffect(() => {
    handleOrderChange(entries);
  }, [entries])

  //Date Order Functions
  const handleOrderChange = (e, array = entries) => {
    if (isDescending === false) {
      array.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      })
    } else {
      array.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      })
    }
    setIsDescending(!isDescending)
  }


  // Filter Mood Functions
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

  const moodList = moodArray.map(mood =>
    <button id="moodFilter" value={mood} onClick={handleFilterChange} >
      {mood}
    </button>);



  return (
    <div id="entryContainer">
      <h1 id="homePage">Thought Bubbles</h1>
      <div id="moodContainer">
        {moodList}
        <button  onClick={handleOrderChange} value="descending">Newest Bubbles</button>
        <button onClick={handleOrderChange} value="ascending">Oldest Bubbles</button>
      </div>

      <div id="container">
        {renderFilteredEntries(filter)}
      </div>
    </div>
  )
}

export default EntryDisplay;
