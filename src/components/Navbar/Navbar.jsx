import React from 'react'
import logo from "../../assets/admin_assets/logo.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className="logo"/>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>menu</li>
          <li>mobile-app</li>
          <li>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt=""/>
            <div className="navbar-search-icon">
                <img src={basket_icon} alt=""/>
                <div className="dot"></div>
            </div>
        </div>

      
    </div>
  )
}

export default Navbar
