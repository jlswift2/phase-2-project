import React from 'react'
import Entry from './Entry'
import { Link } from "react-router-dom";

function EntryDisplay({ entry }) {
  return (
    <div>
      <Link to={`/Entry/${entry.id}`}>
        {entry.title} by {entry.author}
        <br/>
        mood: {entry.mood}
      </Link>
    </div>
  )
}

export default EntryDisplay