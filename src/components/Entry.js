import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";

function Entry() {
  const { id } = useParams();
  const history =useHistory()
  const [entry, setEntry] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:8002/journals/${id}`)
    .then(res => res.json())
    .then(data => setEntry(data));
  }, [id]);

  function handleDelete(e) {
      fetch(`http://localhost:8002/journals/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => history.push("/"));
    }

  return (
    <div id="entryEdit">
      {entry.title} by {entry.author}
      <br/>
      {entry.text_body}
      <br/>
      mood: {entry.mood}
      <Link to={`/Entry/${entry.id}/Edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Entry