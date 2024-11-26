import React, { useState } from 'react';
import './HealthPackages.css';
import { FaCheck, FaClock, FaArrowRight, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';

const HealthPackages = () => {
  const [selectedDuration, setSelectedDuration] = useState('yearly');

  const packages = [
    {
      name: "Basic Health Check",
      tests: "40+ Tests",
      monthlyPrice: "1499",
      yearlyPrice: "999",
      features: ["Complete Blood Count", "Liver Function", "Kidney Function", "Blood Sugar"],
      color: "#007bff",
      icon: <BiTestTube />
    },
    {
      name: "Comprehensive",
      tests: "70+ Tests",
      monthlyPrice: "2999",
      yearlyPrice: "2499",
      features: ["Basic Tests +", "Thyroid Profile", "Vitamin Tests", "Cardiac Risk"],
      recommended: true,
      color: "#28a745",
      icon: <BiTestTube />
    },
    {
      name: "Executive",
      tests: "90+ Tests",
      monthlyPrice: "5999",
      yearlyPrice: "4999",
      features: ["Comprehensive +", "Cancer Markers", "Hormone Analysis", "Expert Consult"],
      color: "#6f42c1",
      icon: <BiTestTube />
    }
  ];

  return (
    <div className="health-packages">
      <div className="package-container">
        <div className="package-header">
          <div>
            <h2>Health Check Packages</h2>
            <p className="section-desc">Choose the right package for your needs</p>
          </div>
          <div className="duration-toggle">
            <span className={selectedDuration === 'monthly' ? 'active' : ''} 
                  onClick={() => setSelectedDuration('monthly')}>
              <FaRegCalendarAlt className="toggle-icon" /> Monthly
            </span>
            <span className={selectedDuration === 'yearly' ? 'active' : ''} 
                  onClick={() => setSelectedDuration('yearly')}>
              <FaRegCalendarAlt className="toggle-icon" /> Yearly 
              <span className="save-badge">-20%</span>
            </span>
          </div>
        </div>

        <div className="package-cards">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.recommended ? 'recommended' : ''}`}
                 style={{'--package-color': pkg.color}}>
              {pkg.recommended && <div className="recommended-badge">Popular</div>}
              <div className="package-top">
                <div>
                  <div className="package-icon">{pkg.icon}</div>
                  <h3>{pkg.name}</h3>
                  <span className="tests-count">
                    <BiTestTube className="test-icon" /> {pkg.tests}
                  </span>
                </div>
                <div className="price-section">
                  <span className="currency">₹</span>
                  <span className="amount">
                    {selectedDuration === 'yearly' ? pkg.yearlyPrice : pkg.monthlyPrice}
                  </span>
                  <span className="period">/{selectedDuration === 'yearly' ? 'year' : 'month'}</span>
                </div>
              </div>
              <ul className="features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="feature-icon" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="book-package">
                Book Now <FaArrowRight className="btn-icon" />
              </button>
              <div className="package-footer">
                <span><FaRegClock className="footer-icon" /> Report in 24 hours</span>
                <span><FaClock className="footer-icon" /> Valid for 3 months</span>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <a href="/packages">View All Packages <FaArrowRight className="link-icon" /></a>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages; 