import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/beauty">BEAUTY</Link>
          </li>
          <li className="nav-item">
            <Link to="/fashion">FASHION</Link>
          </li>
          <li className="nav-item">
            <Link to="/lifestyle">LIFESTYLE</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;