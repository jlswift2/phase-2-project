import React from "react";
import EntryDisplay from "./EntryDisplay";
import { fadeInUp } from "react-animations"
import styled, { keyframes } from "styled-components";

function Home({ user, handleSetUser }) {
  const FadeInUp = styled.div`animation: 3s ${keyframes`${fadeInUp}`}`;
  
  return (
    <>
      <section>
        <div id="titleContainer">
          <div id="titleBox">
            <FadeInUp>
              <div id="title" >Hello! (user's name).</div>
              <div id="titleDescription">How are you? 😊</div>
            </FadeInUp>
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
