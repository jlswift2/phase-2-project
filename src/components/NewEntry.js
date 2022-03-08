import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewEntry() {
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [text_body, setText_Body] = useState("")
    const [mood, setMood] = useState("")

    const history =useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:8002/journals",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title,name,text_body,mood})
        })
        .then( response => response.json())
        .then( data =>  (data))
        // console.log(name, title, mood, entry)
        history.push("/")
    }




    return (
        <div className="new-entry-form" onSubmit={handleSubmit}>
            <h2>New Entry</h2>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title For Entry..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>
                    <select onChange={(e) => setMood(e.target.value)} placeholder="How Am I Feeling?" value={mood}>
                        <option value="" disabled selected hiddens>How Am I Feeling?</option>
                        <option value="Happy">Happy</option>
                        <option value="Tired">Tired</option>
                        <option value="Sad">Sad</option>
                        <option value="Excitement">Excitement</option>
                        <option value="Contmept">Contmept</option>
                        <option value="Stressed">Stressed</option>
                    </select>
                </label>
                <textarea
                    id="entry"
                    type="text"
                    name="entry"
                    placeholder="Type New Entry..."
                    value={text_body}
                    onChange={(e) => setText_Body(e.target.value)}
                />
                <button type="submit">Add Entry</button>
            </form>
        </div>
    )
}

export default NewEntry;
