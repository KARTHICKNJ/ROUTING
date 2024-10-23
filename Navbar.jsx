import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="container">
        <h1>LOGO</h1>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    </div>
  )
}

export default Navbar