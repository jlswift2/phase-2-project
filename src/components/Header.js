import React from 'react'
import NavBar from './NavBar'

function Header({ user, handleSetUser }) {
  return (
    <header id="navbar">
      <h1 id="welcome">Bubbles</h1> 
        <NavBar user={user} handleSetUser={handleSetUser}/>
    </header>
  )
}

export default Header