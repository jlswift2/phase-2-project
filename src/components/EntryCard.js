import React from 'react'
import { Link } from "react-router-dom";

function EntryDisplay({ entry }) {




  return (
      <div className="card">
      <img id="cardImg" src="https://i.pinimg.com/736x/1b/ef/b5/1befb5723f54627768e1d77642ca4d45.jpg" alt="CATTTTTTT"/>
        <div className="card_details">
          <span class="tag">{entry.mood}</span>
          <div class="name">{entry.title} By: {entry.author}</div>
          <div class="date">{entry.date}</div>
          <p>{entry.text_body}</p>
          <Link to={`/Entry/${entry.id}`} style={{ textDecoration: 'none' }}>
            <button>Read more</button>
          </Link>
        </div>
      </div>
  )
}

export default EntryDisplay


