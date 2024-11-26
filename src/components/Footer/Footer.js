import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Delhi Health Labs</h3>
            <p>Your trusted partner in diagnostic healthcare. Providing accurate and reliable testing services since 2000.</p>
            <div className="contact-info">
              <p>📞 Customer Care: 8422-801-801</p>
              <p>📧 Email: info@delhihealthlabs.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/tests">Book a Test</a></li>
              <li><a href="/packages">Health Packages</a></li>
              <li><a href="/locations">Lab Locations</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Tests</h4>
            <ul>
              <li><a href="/tests/blood">Blood Tests</a></li>
              <li><a href="/tests/diabetes">Diabetes</a></li>
              <li><a href="/tests/thyroid">Thyroid</a></li>
              <li><a href="/tests/cardiac">Cardiac</a></li>
              <li><a href="/tests/covid">Covid-19</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Delhi Health Labs. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 