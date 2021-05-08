import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='video-2.mp4' autoPlay loop muted />
      <h1>Welcome to techZilla</h1>
      <p>Your trusted online Computer World</p>
      
    </div>
  );
}

export default HeroSection;
