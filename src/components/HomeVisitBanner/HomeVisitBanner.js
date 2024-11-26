import React, { useState } from 'react';
import './HomeVisitBanner.css';

const HomeVisitBanner = () => {
  const [pincode, setPincode] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);

  const checkAvailability = () => {
    // Simulate availability check
    const available = pincode.length === 6;
    setIsAvailable(available);
  };

  return (
    <div className="home-visit-banner">
      <div className="banner-content">
        <div className="banner-text">
          <div className="icon-container">
            <span className="icon">🏠</span>
          </div>
          <div className="text-content">
            <h3>Book a Home Visit</h3>
            <p>Safe, convenient sample collection at your doorstep</p>
          </div>
        </div>
        <div className="banner-form">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Enter your pincode" 
              value={pincode}
              onChange={(e) => setPincode(e.target.value.slice(0, 6))}
              maxLength={6}
            />
            <button className="check-btn" onClick={checkAvailability}>
              Check Availability
            </button>
          </div>
          {isAvailable !== null && (
            <div className={`availability-message ${isAvailable ? 'available' : 'not-available'}`}>
              {isAvailable 
                ? "✅ Great! We provide home collection in your area." 
                : "❌ Sorry, we currently don't serve in this area."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeVisitBanner; 