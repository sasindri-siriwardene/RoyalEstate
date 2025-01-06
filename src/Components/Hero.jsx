import React from 'react';
import './Hero.css';
/**
 * HeroSection Component
 * 
 * Displays the hero section of the web application, featuring a welcoming message,
 * promotional content, and a call-to-action button alongside an image.
 *
 * @returns {JSX.Element} JSX markup for the hero section.
 */
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="text-content">
          <h1 className="title">Welcome to Royal Estate</h1>
          <p className="subtitle">Discover Your Dream Home</p>
          <p className="description">
            Experience luxury living with our handpicked selection of premium properties. 
            From urban penthouses to sprawling estates, find your perfect home with Royal Estate.
          </p>
          <button className="cta-button">Explore Listings</button>
        </div>
        <div className="image-container">
          <img 
            src="https://www.compass.com/m/ffcac90517dd757dea6e4aba95aa17834609d1bb_img_0/origin.jpg" 
            alt="Luxury Home Interior" 
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
