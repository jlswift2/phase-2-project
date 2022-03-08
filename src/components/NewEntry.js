import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

function NewEntry() {
    const [formData, setFormData] = useState({
        title: "",
        text_body: "",
        author: "",
        mood: ""
    });

    const history =useHistory()
    const { id } = useParams();
    const match = useRouteMatch();

    useEffect(() => {
        if(match.path === "/Entry/:id/Edit"){
            fetch(`http://localhost:8002/journals/${id}`)
            .then(res => res.json())
            .then(data => setFormData(data));
        }
    }, []);
    
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:8002/journals",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title,name,text_body,mood})
        })
        .then( response => response.json())
        .then( data =>  (data))
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
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Enter your name..."
                    value={formData.author}
                    onChange={handleChange}
                />
                <label>
                    <select onChange={handleChange} placeholder="How Am I Feeling?" value={formData.mood}>
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
                    name="text_body"
                    placeholder="Type New Entry..."

                    value={formData.text_body}
                    onChange={handleChange}

                />
                <button type="submit">Submit Entry</button>
            </form>
        </div>
    )
}

export default NewEntry;
