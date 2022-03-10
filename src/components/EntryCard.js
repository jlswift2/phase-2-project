import React from 'react'
import { Link } from "react-router-dom";

function EntryCard({ entry }) {
  return (
      <div className="card">
      <img id="cardImg" src={entry.img} alt={entry.title} />
        <div className="card_details">
          <span class="tag">{entry.mood}</span>
          <div class="name">{entry.title} By: {entry.author}</div>
          <div class="date">{entry.date}</div>
          <Link to={`/Entry/${entry.id}`} style={{ textDecoration: 'none' }}>
            <button>Read more</button>
          </Link>
        </div>
      </div>
  )
}

export default EntryCard


