import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="top-header">
      <div className="header-left">
        <div className="contact-info">
          <span>Customer Care: 8422-801-801</span>
          <span>Home Visit Booking: 9982-782-555</span>
        </div>
      </div>
      <div className="header-right">
        <nav className="top-nav">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/corporate">Corporate</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header; 