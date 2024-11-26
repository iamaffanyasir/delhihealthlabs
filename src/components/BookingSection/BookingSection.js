import React from 'react';
import './BookingSection.css';

const BookingSection = () => {
  return (
    <div className="booking-section">
      <div className="booking-container">
        <h2>Book Your Test</h2>
        <div className="booking-options">
          <div className="booking-card">
            <div className="icon">🏥</div>
            <h3>Visit Lab</h3>
            <p>Book an appointment at our nearest center</p>
            <button className="book-btn">Book Now</button>
          </div>
          <div className="booking-card">
            <div className="icon">🏠</div>
            <h3>Home Collection</h3>
            <p>Get your samples collected at home</p>
            <button className="book-btn">Book Home Visit</button>
          </div>
          <div className="booking-card">
            <div className="icon">📱</div>
            <h3>Upload Prescription</h3>
            <p>Share your prescription for booking</p>
            <button className="book-btn">Upload Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection; 