import React from 'react'
import logo from "../logo/logo2.jpeg";


function Mission() {
  return (
    <div id="missionContainer">
      <div id="missionContent">
        <img id="logoMission" src={logo} alt="logo" />
        <h4 style={{textAlign: 'center',width: '100%'}}>
          Our mission at Bubbles is to bring people together from different background to create a unquie and welcoming bubble by allowing their voices to be heard with imagination, creativity, and ingenuity. 
        </h4>
      </div>
    </div>
  )
}

export default Mission