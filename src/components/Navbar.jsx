import React, {useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './mt.png';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
    const closeMenu = () => {
      setMenuActive(false);
    };
  
    return (
      <header className="navbar">
          <Link to="/" onClick={closeMenu}><img className="logo" src={logo} alt="Logo"/></Link>
        <div className={`menu-toggle ${menuActive ? 'is-active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
          <ul>
            <li>
              <HashLink smooth to='/#about' onClick={closeMenu}>About</HashLink>
            </li>
            <li>
            <HashLink smooth to='/#skills' >Skills</HashLink>
            </li>
            <li>
            <HashLink smooth to='/#projects' >Projects</HashLink>
            </li>
          </ul>
        </nav>
        {menuActive && <div id="overlay" onClick={closeMenu}></div>}
      </header>
    );
  };
  
  export default Navbar;
  