import React, { useState } from 'react';
import './HealthPackages.css';

const HealthPackages = () => {
  const [selectedDuration, setSelectedDuration] = useState('yearly');

  const packages = [
    {
      name: "Basic Health Check",
      tests: "40+ Tests",
      monthlyPrice: "1499",
      yearlyPrice: "999",
      features: ["Complete Blood Count", "Liver Function", "Kidney Function", "Blood Sugar"],
      color: "#007bff"
    },
    {
      name: "Comprehensive",
      tests: "70+ Tests",
      monthlyPrice: "2999",
      yearlyPrice: "2499",
      features: ["Basic Tests +", "Thyroid Profile", "Vitamin Tests", "Cardiac Risk"],
      recommended: true,
      color: "#28a745"
    },
    {
      name: "Executive",
      tests: "90+ Tests",
      monthlyPrice: "5999",
      yearlyPrice: "4999",
      features: ["Comprehensive +", "Cancer Markers", "Hormone Analysis", "Expert Consult"],
      color: "#6f42c1"
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
              Monthly
            </span>
            <span className={selectedDuration === 'yearly' ? 'active' : ''} 
                  onClick={() => setSelectedDuration('yearly')}>
              Yearly <span className="save-badge">-20%</span>
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
                  <h3>{pkg.name}</h3>
                  <span className="tests-count">{pkg.tests}</span>
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
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="book-package">Book Now</button>
            </div>
          ))}
        </div>
        <div className="view-all">
          <a href="/packages">View All Packages →</a>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages; 