import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ scrollToSection, aboutRef, servicesRef, contactRef }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (ref) => {
    if (location.pathname === "/") {
      scrollToSection(ref);
    } else {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(ref), 100); // Delay ensures home loads before scrolling
    }
  };

  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><button onClick={() => handleScroll(aboutRef)} className="nav-btn">About</button></li>
        <li><button onClick={() => handleScroll(servicesRef)} className="nav-btn">Services</button></li>
        <li><button onClick={() => handleScroll(contactRef)} className="nav-btn">Contact</button></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
