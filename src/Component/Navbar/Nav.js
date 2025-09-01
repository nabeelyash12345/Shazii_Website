import React from 'react'
import { NavLink } from 'react-router-dom'


import './Nav.css'
import img from '../../Assets/logo.png'
function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navbar_logo'>
        <img src={img}/>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to ="/">Home</NavLink>
          </li>
          <li> 
            <NavLink to ="/Services">Service</NavLink>
            </li>
          <li>
            <NavLink to ="/Showroom">Showroom</NavLink>
          </li>
          <li>Service</li>
          <li>About</li>
          <li>Home</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar