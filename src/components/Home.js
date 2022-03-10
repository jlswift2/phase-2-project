import React from "react";
import EntryDisplay from "./EntryDisplay";

function Home({ user, handleSetUser }) {
  return (
    <>
      <section>
        <div id="titleContainer">
          <div id="titleBox">
            <div id="title">Hello! (user's name).</div>
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
