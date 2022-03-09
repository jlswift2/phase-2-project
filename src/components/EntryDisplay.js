import React, { useState, useEffect } from "react";
import EntryCard from "./EntryCard";

function Home() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isDescending, setIsDescending] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8002/journals")
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  //Order Functions
  const handleOrderChange = () => {
    if (isDescending === true) {
      entries.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      })
    } else {
      entries.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      })
    }
    setIsDescending(!isDescending)
  }


  // Filter Functions
  const handleFilterChange = event => {
    setFilter(event.target.value);
  }

  const renderFilteredEntries = filter => {
    if (filter === "all") return entries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);

    const filteredEntries = entries.filter(entry => entry.mood === filter);
    return filteredEntries.map(entry => <EntryCard key={entry.id} entry={entry}></EntryCard>);
  }






  
  return (
    <div id="entryContainer">
      <h1>Home Page</h1>
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
      <form onChange={handleOrderChange}>
        <label htmlFor="order">Order by: </label>
        <select name="order">
          <option value="descending">Newest First</option>
          <option value="ascending">Oldest First</option>  
        </select>  
      </form>

      {renderFilteredEntries(filter)}
    </div>
  )
}

export default Home;
