import React from 'react'
import'./Navbar.css'
import logo from '../../assets/logo.png'

//New import
import {link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='container'>
      <img src = {logo} alt = "" className='logo'/>
      <ul>
        <li><link to = "/home" >Home</link></li>
        <li>About</li>
        <li>Services</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
