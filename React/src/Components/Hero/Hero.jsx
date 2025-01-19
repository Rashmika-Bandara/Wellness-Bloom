import React from 'react';
import './Hero.css';
import arrow_button from '../../assets/ArrowHead.png';

const Hero = ({ heroData, setHeroCount, heroCount }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_button} alt="Explore Arrow" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li 
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li 
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li 
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
      </div>
            <div className='hero-text-center'>
              <h1>This is the heading</h1>
              <p>WellnessBloom is where compassion meets expert care, guiding you toward a healthier, happier life.
                 With personalized health plans, trusted doctors, and empowering resources, we’re here to help you thrive.
                 Together, let’s plant the seeds of wellness, nurture them with care, 
                 and watch your life bloom to its fullest potential!</p>
                 <button className='btn'>Start your journey</button>
            </div>
     

    </div>
  );
};

export default Hero;
