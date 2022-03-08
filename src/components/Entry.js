import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Entry() {
  const { id } = useParams();

  const [entry, setEntry] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:8002/journals/${id}`)
    .then(res => res.json())
    .then(data => setEntry(data));
  }, [id]);

  return (
    <div>
      {entry.title} by {entry.name}
      <br/>
      {entry.text_body}
      <br/>
      mood: {entry.mood}
    </div>
  )
}

export default Entry