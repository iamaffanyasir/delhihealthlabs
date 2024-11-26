import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      comment: "Excellent service! The home collection was very convenient and the reports were delivered on time. Very professional staff.",
      rating: 5,
      image: "testimonial1.jpg"
    },
    {
      name: "Priya Singh",
      location: "Noida",
      comment: "Very satisfied with their service. The online booking process was smooth and the staff was very courteous.",
      rating: 5,
      image: "testimonial2.jpg"
    },
    {
      name: "Amit Sharma",
      location: "Gurgaon",
      comment: "Highly recommend Delhi Health Labs. Their health packages are comprehensive and reasonably priced.",
      rating: 5,
      image: "testimonial3.jpg"
    }
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        <p className="section-desc">Trusted by thousands of satisfied customers</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="profile-image">
                  <img src={`/images/testimonials/${testimonial.image}`} alt={testimonial.name} />
                </div>
                <div className="profile-info">
                  <h3>{testimonial.name}</h3>
                  <span className="location">{testimonial.location}</span>
                </div>
              </div>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="comment">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 