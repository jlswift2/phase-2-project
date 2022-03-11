import React from 'react'
import logo from "../logo/logo4.png";


function Mission() {
  return (
    <div id="missionContainer">
      <div id="missionContent">
        <img id="logoMission" src={logo} alt="logo" />
        <h4 style={{textAlign: 'center',width: '100%'}}>
          By combining social media and journaling, our mission at Bubbles is to bring people together from different backgrounds to create a unquie and welcoming bubble by allowing their voices to be heard with imagination, creativity, and ingenuity.
          <br/> 
          Come join the conversation and make your bubble.
        </h4>
      </div>
    </div>
  )
}

export default Mission