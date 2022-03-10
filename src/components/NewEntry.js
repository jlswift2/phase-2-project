import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch, Redirect } from "react-router-dom";

function NewEntry({ user, handleSetUser }) {
    const [formData, setFormData] = useState({
        title: "",
        text_body: "",
        author: "",
        mood: "",
        date: {},
        img: ""
    });
    
    const history =useHistory()
    const { id } = useParams();
    const match = useRouteMatch();
    
    
    useEffect(() => {
        handleSetUser(userStatus);

        if(match.path === "/Entry/:id/Edit"){
            fetch(`http://localhost:8002/journals/${id}`)
            .then(res => res.json())
            .then(data => setFormData(data));
        } else {
            setFormData({
                title: "",
                text_body: "",
                author: user ? user.username : "",
                mood: "",
                date: {}
            })
        }
    }, [match.path]);

    const userStatus = JSON.parse(localStorage.getItem("journalUser"));
    //if user is not logged in, redirect to Login
    if(userStatus === null){
        return <Redirect to="/Login"></Redirect>
    }
    
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
            //making a new post 
        if(match.path === "/NewEntry"){
            const newEntry = {
                ...formData,
                date: new Date()
            }
            fetch("http://localhost:8002/journals",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newEntry)
        })
                .then( response => response.json())
                .then( data => history.push("/"));
        }

            //making a post edit 
        if(match.path === "/Entry/:id/Edit"){
            fetch(`http://localhost:8002/journals/${id}`,{
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            .then( response => response.json())
            .then(data => history.push("/"));
        }
    }

    return (
        <div id="new-entry-form" onSubmit={handleSubmit}>
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
                    name="img"
                    placeholder="Enter Image URL For Entry"
                    value={formData.img}
                    onChange={handleChange}
                />
                {/* <input
                    type="text"
                    name="author"
                    placeholder="Enter your name..."
                    value={formData.author}
                    onChange={handleChange}
                /> */}
                <label>
                    <select onChange={handleChange} name="mood" placeholder="How Am I Feeling?" value={formData.mood}>
                        <option value="" disabled selected hiddens>How Am I Feeling?</option>
                        <option value="Happy">Happy</option>
                        <option value="Tired">Tired</option>
                        <option value="Sad">Sad</option>
                        <option value="Excitement">Excitement</option>
                        <option value="Contempt">Contempt</option>
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
