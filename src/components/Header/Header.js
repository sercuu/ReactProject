import React from 'react'
import {NavLink} from 'react-router-dom'
 
function Header() {
  return (
    <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login </NavLink>
        </li>
  </ul>
  )
}
export default Header;