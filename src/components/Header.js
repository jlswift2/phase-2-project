import React from 'react'
import NavBar from './NavBar'

function Header({ user, handleSetUser }) {
  return (
    <div>
        <NavBar user={user} handleSetUser={handleSetUser}/>
    </div>
  )
}

export default Header