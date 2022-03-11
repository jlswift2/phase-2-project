import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch, Redirect } from "react-router-dom";

const moodArray = ["😊Happy", "😣Tired", "😥Sad", "🤩Excited", "🥰Loved", "😖Stressed"]

function NewEntry({ user, handleSetUser }) {
    const [formData, setFormData] = useState({
        title: "",
        text_body: "",
        author: "",
        mood: "",
        date: {},
        img: ""
    });

    const history = useHistory()
    const { id } = useParams();
    const match = useRouteMatch();

    useEffect(() => {
        handleSetUser(userStatus);

        if (match.path === "/Entry/:id/Edit") {
            fetch(`http://localhost:8002/journals/${id}`)
                .then(res => res.json())
                .then(data => setFormData(data));
        } else {
            setFormData({
                title: "",
                text_body: "",
                author: user ? user.username : "",
                mood: "",
                date: {},
                img: ""
            })
        }
    }, [match.path]);

    const userStatus = JSON.parse(localStorage.getItem("journalUser"));
    //if user is not logged in, redirect to Login
    if (userStatus === null) {
        return <Redirect to="/Login"></Redirect>
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData.mood)
    }

    function handleSubmit(e) {
        e.preventDefault()
        //making a new post 
        if (match.path === "/NewEntry") {
            const newEntry = {
                ...formData,
                date: new Date()
            }
            console.log(newEntry.mood)

            if (newEntry.img === "") {
                fetch(`https://api.giphy.com/v1/gifs/random?tag=${newEntry.mood}&api_key=rgi9jD5HiZd63HBPZWvUnPqpibAw52Ri&limit=1`)
                    .then(r => r.json())
                    .then(gif => {
                        newEntry.img = gif.data.images.original.url
                        fetch("http://localhost:8002/journals", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(newEntry)
                        })
                            .then(response => response.json())
                            .then(data => history.push("/"));
                    })
            } else {
                fetch("http://localhost:8002/journals", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newEntry)
                })
                    .then(response => response.json())
                    .then(data => history.push("/"));
            }
        }

        //making a post edit 
        if (match.path === "/Entry/:id/Edit") {
            fetch(`http://localhost:8002/journals/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(data => history.push("/"));
        }
    }
    const moodList = moodArray.map(mood =>
        <option value={mood} >
            {mood}
        </option>);
    const moodList2 = moodArray.map(mood =>
        <button onClick={(e) => console.log(e.target.value)} name="mood" value={mood}>
            {mood}
        </button>);


    return (
        <div id="new-entry-form" onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center" }}>New Bubble</h1>
            <br />
            <br />
            <form id="formInfo" style={{ textAlign: "center"}}>
                <h3 style={{ textAlign: "center" }}>Bubble Title</h3>
                <input
                    className="inputArea"
                    type="text"
                    name="title"
                    placeholder="Enter Title..."
                    value={formData.title}
                    onChange={handleChange}
                />
                <h3 style={{ textAlign: "center" }}>Image</h3>
                <input
                    className="inputArea"
                    type="text"
                    name="img"
                    placeholder="Image URL Optional"
                    value={formData.img}
                    onChange={handleChange}
                />
                <h3 style={{ textAlign: "center" }}>Today I'm Feeling</h3>
                <label>
                    <select id="dropdown" onChange={handleChange} name="mood" placeholder="How Am I Feeling?" value={formData.mood}>
                    <option value="" disabled selected hiddens>Select Your Mood</option>
                        {moodList}
                    </select>
                </label>
                <textarea
                    className="inputArea"
                    id="entryText"
                    type="text"
                    name="text_body"
                    placeholder="Type New Bubble..."
                    value={formData.text_body}
                    onChange={handleChange}

                />
                <button type="submit">Submit Bubble</button>
            </form>
        </div>
    )
}

export default NewEntry;
