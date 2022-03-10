import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";

const moodArray = ["Happy", "Tired", "Sad", "Excitement", "Loved", "Stressed"]

function Entry({ user, handleSetUser }) {
  const { id } = useParams();
  const history = useHistory()
  const [entry, setEntry] = useState({});

  useEffect(() => {
    const userStatus = JSON.parse(localStorage.getItem("journalUser"));
    fetch(`http://localhost:8002/journals/${id}`)
      .then(res => res.json())
      .then(data => {
        setEntry(data);
        handleSetUser(userStatus);
      });
  }, [id]);

  function handleDelete(e) {
    fetch(`http://localhost:8002/journals/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => history.push("/"));
  }

  const moodList = moodArray.map(mood =>
    <button id="moodFilter" value={mood}>
      {mood}
    </button>);

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
      .then(data => setEntry(data));
    }

    else{
      return null;
    }
  }

  return (
    <div id="entryEdit">
      <div id="entryTitle">
        <h1>Title</h1>
        <p className="textArea">{entry.title}</p>
        <h3>Author</h3>
        <p className="textArea">{entry.author}</p>
      </div>
      <h3 style={{ textAlign: "center" }}>Today I was Feeling</h3>
      <div id="entryMood">
        <button> {entry.mood} </button>
        {/* {moodList} */}
      </div>
      <h3 style={{ textAlign: "center" }}>My Bubble</h3>
      <div id="entryContent">
        <img id="entryImg" src="https://i.pinimg.com/736x/1b/ef/b5/1befb5723f54627768e1d77642ca4d45.jpg" alt="CATTTTTTT" />
        <p className="textArea" id="entryBubble" >{entry.text_body}</p>
      </div>
      <IoMdHeart onClick={() => handleLikesClick()}></IoMdHeart> {entry.likes}

      {
        user === null || user.username !== entry.author ? null
          : <>
            <Link to={`/Entry/${entry.id}/Edit`}>
              <button style={{ textDecoration: 'none' }}>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </>
      }

    </div>
  )
}

export default Entry