import React from 'react';
import './AboutStyle.css'; // CSS file

const About = () => (
    <div className="about-container">
      <h1>About Me</h1>
      <img src="/assets/your-photo.jpg" alt="Your Name" className="profile-photo" />
      <h2>Tanner Huntus</h2>
      <p>
        Information
      </p>
      <a href="/assets/TannerHuntusResume.pdf" className="btn" target="_blank" rel="noopener noreferrer">View My Resume</a>
    </div>
  );
  
  export default About;