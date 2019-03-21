import React from 'react'
import {NavLink} from 'react-router-dom'
import LogOut from '../LogOut/LogOut'
import './Header.scss'
 
function Header() {
  return (
    <div className="headerContainer">
      <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <LogOut/>
      </ul>
    </div>
    
  )
}
export default Header;