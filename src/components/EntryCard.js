import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";

function EntryCard({ entry, user }) {
  const [likes, setLikes] = useState(entry.likes);

  const handleLikesClick = () => {
    if(user){
      fetch(`http://localhost:8002/journals/${entry.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: ++entry.likes
        })
      })
      .then(res => res.json())
      .then(data => setLikes(data.likes));
    }
    
    else{
      return null;
    }
  }

  return (
      <div className="card">
      <img id="cardImg" src={entry.img} alt={entry.title} />
        <div className="card_details">
          <span class="tag">{entry.mood}</span>

          <div class="name" style={{textAlign: "center"}}>{entry.title} <br/> 
          by {entry.author}</div>
          <div class="date" style={{textAlign: "center"}}>{new Date(entry.date).toLocaleString()}</div>

          <Link to={`/Entry/${entry.id}`} style={{ textDecoration: 'none' }}>
            <button>Read more</button>
          </Link>
          <div className="card-heart">
            <span className="card-heart-size" onClick={() => handleLikesClick()}>❤️ {likes}</span>
          </div>
        </div>
      </div>
  )
}

export default EntryCard


