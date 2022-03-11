import React, { useState, useEffect } from "react";
import EntryCard from "./EntryCard";
import { fadeInUp } from "react-animations"
import styled, { keyframes } from "styled-components";

const moodArray = ["💭 All", "😊 Happy", "😣 Tired", "😥 Sad", "🤩 Excited", "🥰 Loved", "😖 Stressed"]

function EntryDisplay({ user, handleSetUser }) {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isDescending, setIsDescending] = useState(true);

  const FadeInUp = styled.div`animation: 2s ${keyframes`${fadeInUp}`}`;

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
    if (filter === "All") return entries.map(entry => <EntryCard key={entry.id} entry={entry} user={user}></EntryCard>);

    else if (filter === "Your Entries") {
      const filteredEntries = entries.filter(entry => entry.author === user.username);
      return filteredEntries.map(entry => <EntryCard key={entry.id} entry={entry} user={user}></EntryCard>);
    }

    const filteredEntries = entries.filter(entry => {
      return entry.mood === filter
    });
    return filteredEntries.map(entry => <EntryCard key={entry.id} entry={entry} user={user}></EntryCard>);
  }

  const moodList = moodArray.map(mood =>
    <button id="moodFilter" value={mood.substring(3, mood.length)} onClick={handleFilterChange} >
      {mood}
    </button>);

  return (
    <div id="entryContainer">
      <h1 id="homePage">Thought Bubbles</h1>
      <div id="filterContainer">
        {user ? <button id="moodFilter" value="Your Entries" onClick={handleFilterChange}> ✏️ Your Entries</button> : null}
        {moodList}
        <button  onClick={handleOrderChange} value="descending">⏳ Newest Bubbles</button>
        <button onClick={handleOrderChange} value="ascending"> ⌛️ Oldest Bubbles</button>
      </div>

      <FadeInUp>
        <div id="container">
          {renderFilteredEntries(filter)}
        </div>
      </FadeInUp>
    </div>
  )
}

export default EntryDisplay;
