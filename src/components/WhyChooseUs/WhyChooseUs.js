import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Accurate Results",
      description: "NABL accredited labs with highly accurate testing procedures",
      icon: "🎯"
    },
    {
      title: "Expert Team",
      description: "Qualified pathologists and technicians with years of experience",
      icon: "👨‍⚕️"
    },
    {
      title: "Quick Reports",
      description: "Same day reports for most tests with digital delivery",
      icon: "⚡"
    },
    {
      title: "Home Collection",
      description: "Convenient sample collection from your doorstep",
      icon: "🏠"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art testing equipment and facilities",
      icon: "🔬"
    },
    {
      title: "Affordable Prices",
      description: "Competitive pricing with no compromise on quality",
      icon: "💰"
    }
  ];

  return (
    <div className="why-choose-us">
      <div className="choose-container">
        <h2>Why Choose Delhi Health Labs?</h2>
        <p className="section-desc">Leading the way in diagnostic excellence</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 