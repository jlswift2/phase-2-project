import React from "react";
import EntryDisplay from "./EntryDisplay";

function Home({ user, handleSetUser }) {


  console.log(user);
  
  const helloMessage = user ? <div id="title">Hello, {user.username}!</div> : <div id="title">Hello!</div>
  
  return (
    <>
      <section>
        <div id="titleContainer">
          <div id="titleBox">
            {helloMessage}
            <div id="titleDescription">How are you? 😊</div>
          </div>
          <div id="midArrow">
            <a href="#entryContainer" className="arrow">
              <img className="arrow" src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-down-512.png" alt="arrow" />
            </a>
          </div>
        </div>
      </section>
      <EntryDisplay user={user} handleSetUser={handleSetUser}/>
    </>
  )
}

export default Home;
