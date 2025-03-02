import React from 'react';
import './About.css';

const About = ({ innerRef }) => {
  return (
    <section ref={innerRef} id="about" className="about1">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        Welcome to Wellness Bloom! We are dedicated to promoting a healthy lifestyle by offering
        quality wellness products and expert guidance. Our mission is to provide sustainable, 
        natural, and scientifically backed solutions for your well-being.
      </p>
      <div className="about-content">
        <div className="about-box">
          <h3>Our Mission</h3>
          <p>
            We strive to bring wellness and balance to everyday life through natural and effective products.
          </p>
        </div>
        <div className="about-box">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted and innovative wellness brand, inspiring people to lead healthier lives.
          </p>
        </div>
        <div className="about-box">
          <h3>Why Choose Us?</h3>
          <p>
            ✔ High-quality, organic products <br />
            ✔ Expert-backed wellness advice <br />
            ✔ Sustainable and eco-friendly solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
