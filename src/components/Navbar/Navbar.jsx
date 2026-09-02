import React, { useState } from 'react'
import logo from "../../assets/admin_assets/logo.png"
import search_icon from "../../assets/frontend_assets/search_icon.png"
import basket_icon from "../../assets/frontend_assets/basket_icon.png"
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>

      <img src={logo} alt="Logo" className="logo"/>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
      </ul>

      <div className="navbar-right">

        <img src={search_icon} alt="Search"/>

        <div className="navbar-search-icon">
          <img src={basket_icon} alt="Basket"/>
          <div className="dot"></div>
        </div>

        <button>Sign in</button>

      </div>

    </div>
  )
}

export default Navbar