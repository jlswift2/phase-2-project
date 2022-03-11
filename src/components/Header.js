import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'

function Header({ user, handleSetUser }) {
  const history = useHistory()
  
  return (
    <header id="navbar"> 
      <h1 id="welcome" onClick={() => {history.push('/')}}>Bubbles</h1> 
        <NavBar user={user} handleSetUser={handleSetUser}/>
    </header>
  )
}

export default Header