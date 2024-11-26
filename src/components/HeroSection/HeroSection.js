import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "HEALTH ALWAYS COMES FIRST",
      subtitle: "BUT NOW #CareComesHome",
      description: "Book a home visit with Delhi Health Labs for blood tests",
      image: "/images/hero/slide1.jpg",
      buttonText: "Book Now",
      icon: <FaArrowRight />
    },
    {
      title: "ACCURATE DIAGNOSTICS",
      subtitle: "State-of-the-art Laboratory",
      description: "Get precise results with our advanced testing facilities",
      image: "/images/hero/slide2.jpg",
      buttonText: "Learn More",
      icon: <FaArrowRight />
    },
    {
      title: "HEALTH PACKAGES",
      subtitle: "Comprehensive Check-ups",
      description: "Choose from our wide range of health packages",
      image: "/images/hero/slide3.jpg",
      buttonText: "View Packages",
      icon: <FaArrowRight />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            <p>{slide.description}</p>
            <button className="slide-btn">
              {slide.buttonText}
              <span className="btn-icon">{slide.icon}</span>
            </button>
          </div>
        </div>
      ))}
      <button className="carousel-btn prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection; 