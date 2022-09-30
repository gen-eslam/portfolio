import React from 'react';
import "./Navbar.css"
import logo from '../../assets/logo.png';

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-logo'> 
      <img src={logo} alt='logo' />
      </div> 
      <nav className='nav-links' >
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Services</a>
            </li>
            <li>
                <a href='/'>Portfolio</a>
            </li>
        </ul>
      </nav>
    </nav>
  )
}
