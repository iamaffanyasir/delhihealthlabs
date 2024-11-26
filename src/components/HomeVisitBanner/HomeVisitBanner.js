import React, { useState } from 'react';
import './HomeVisitBanner.css';
import { FaHome, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';

const HomeVisitBanner = () => {
  const [pincode, setPincode] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);

  const checkAvailability = () => {
    const available = pincode.length === 6;
    setIsAvailable(available);
  };

  return (
    <div className="home-visit-banner">
      <div className="banner-content">
        <div className="banner-text">
          <div className="icon-container">
            <FaHome className="icon" />
          </div>
          <div className="text-content">
            <h3>Book a Home Visit</h3>
            <p>Safe, convenient sample collection at your doorstep</p>
          </div>
        </div>
        <div className="banner-form">
          <div className="input-group">
            <div className="input-with-icon">
              <FaMapMarkerAlt className="input-icon" />
              <input 
                type="text" 
                placeholder="Enter your pincode" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value.slice(0, 6))}
                maxLength={6}
              />
            </div>
            <button className="check-btn" onClick={checkAvailability}>
              Check Availability
            </button>
          </div>
          {isAvailable !== null && (
            <div className={`availability-message ${isAvailable ? 'available' : 'not-available'}`}>
              {isAvailable 
                ? <><FaCheck className="status-icon" /> Great! We provide home collection in your area.</> 
                : <><FaTimes className="status-icon" /> Sorry, we currently don't serve in this area.</>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeVisitBanner; 