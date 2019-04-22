import React from 'react'
import {NavLink} from 'react-router-dom'
import LogOut from '../LogOut/LogOut'
import './Header.scss'
 
function Header() {
  return (
		<div className="headerContainer">
			<div className="row">
					<div className="col-8">
						<ul>
							<li>
								<NavLink to="/"> Home </NavLink>
							</li>
							<li>
								<NavLink to="todolist"> Todolist </NavLink>
							</li>
						</ul>
					</div>
					<div className="col-4">
						<LogOut/>
					</div>
				</div>	
		</div>	
    
  )
}
export default Header;