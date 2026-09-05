import React, { useContext, useState } from 'react'
import logo from "../../assets/admin_assets/logo.png"
import search_icon from "../../assets/frontend_assets/search_icon.png"
import basket_icon from "../../assets/frontend_assets/basket_icon.png"
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }
  return (
    <div className='navbar'>

      <Link to='/'><img src={logo} alt="Logo" className="logo"/></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
      </ul>

      <div className="navbar-right">

        <img src={search_icon} alt="Search"/>

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={basket_icon} alt="Basket"/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        {!token?<button onClick={() => setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt=""/>
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
              <hr/>
              <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
            </ul>
        </div>}
      </div>

    </div>
  )
}

export default Navbar