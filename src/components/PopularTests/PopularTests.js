import React from 'react';
import './PopularTests.css';

const PopularTests = () => {
  const tests = [
    {
      name: "Complete Blood Count",
      price: "499",
      description: "Comprehensive blood test to check overall health",
      turnaround: "Same Day"
    },
    {
      name: "Diabetes Screening",
      price: "399",
      description: "Blood sugar and HbA1c test",
      turnaround: "Same Day"
    },
    {
      name: "Thyroid Profile",
      price: "699",
      description: "Complete thyroid function assessment",
      turnaround: "24 Hours"
    },
    {
      name: "Lipid Profile",
      price: "599",
      description: "Cholesterol and triglycerides test",
      turnaround: "Same Day"
    }
  ];

  return (
    <div className="popular-tests">
      <div className="tests-container">
        <h2>Popular Tests</h2>
        <p className="section-desc">Most frequently booked diagnostic tests</p>
        
        <div className="tests-grid">
          {tests.map((test, index) => (
            <div key={index} className="test-card">
              <h3>{test.name}</h3>
              <p className="description">{test.description}</p>
              <div className="test-details">
                <div className="price">₹{test.price}</div>
                <div className="turnaround">Report in: {test.turnaround}</div>
              </div>
              <button className="book-test">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTests; 