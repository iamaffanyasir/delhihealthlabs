import React from 'react';
import './HealthRisks.css';

const HealthRisks = () => {
  const risks = [
    {
      title: "Diabetes",
      description: "Regular screening for blood sugar levels",
      icon: "🩺"
    },
    {
      title: "Heart Disease",
      description: "Comprehensive cardiac risk assessment",
      icon: "❤️"
    },
    {
      title: "Thyroid",
      description: "Complete thyroid function evaluation",
      icon: "🔬"
    },
    {
      title: "Cancer Screening",
      description: "Early detection and prevention",
      icon: "🔍"
    },
    {
      title: "Vitamin Deficiency",
      description: "Essential nutrients assessment",
      icon: "💊"
    },
    {
      title: "Liver Health",
      description: "Liver function and health check",
      icon: "🏥"
    }
  ];

  return (
    <div className="health-risks">
      <div className="risks-container">
        <h2>Common Health Risks</h2>
        <p className="section-desc">Early detection is key to better health outcomes</p>
        
        <div className="risks-grid">
          {risks.map((risk, index) => (
            <div key={index} className="risk-card">
              <div className="risk-icon">{risk.icon}</div>
              <h3>{risk.title}</h3>
              <p>{risk.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthRisks; 