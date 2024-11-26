import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="logo">
        <a href="/">
          <h2>Delhi Health Labs</h2>
        </a>
      </div>
      <div className="nav-links">
        <ul>
          <li className="dropdown">
            <a href="#">Health Risks</a>
          </li>
          <li className="dropdown">
            <a href="#">Health Conditions</a>
          </li>
          <li className="dropdown">
            <a href="#">Blood Tests</a>
          </li>
          <li className="dropdown">
            <a href="#">Health Packages</a>
          </li>
          <li className="dropdown">
            <a href="#">Specialty</a>
          </li>
        </ul>
      </div>
      <div className="nav-actions">
        <button className="btn-home-visit">Book Home Visit</button>
        <button className="btn-upload">Upload</button>
        <div className="user-actions">
          <a href="/track">Sample Tracking</a>
          <a href="/reports">Download Report</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 