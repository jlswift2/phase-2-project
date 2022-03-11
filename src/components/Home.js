import React, { useRef } from "react";
import EntryDisplay from "./EntryDisplay";
import { fadeInUp, bounce } from "react-animations"
import styled, { keyframes } from "styled-components";
import useInterSectionObserver from "../useInterSectionObserver";

function Home({ user, handleSetUser }) {
  const FadeInUp = styled.div`animation: 5s ${keyframes`${fadeInUp}`}`;
  const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;

  const bubblesSection = useRef(null);
  useInterSectionObserver(bubblesSection);
  
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
          <Bounce>
            <div id="midArrow">
              <a href="#entryContainer" className="arrow">
                <img className="arrow" src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-down-512.png" alt="arrow" />
              </a>
            </div>
          </Bounce>
        </div>
      </section>
      <section ref={bubblesSection}>
        <EntryDisplay user={user} handleSetUser={handleSetUser}/>
      </section>
    </>
  )
}

export default Home;
