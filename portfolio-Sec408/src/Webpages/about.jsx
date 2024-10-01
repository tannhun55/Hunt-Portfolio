import React from 'react';
import './AboutStyle.css'; // CSS file

/* 
 * File: about.jsx
 * Student's Name: Tanner Huntus
 * StudentID: 301331363
 * Date: 2024-10-01
 */

// HTML Coding to produce the About page
// Javascript code to handle the About page data
const About = () => (
    <div className="about-container">
      <h1>About Me</h1>
      <img src="\src\assets\PhotoOfMe.jpg" alt="Your Name" className="profile-photo" />
      <h2>Tanner Huntus</h2>
      <p>
      I am focused on building a career in software development with a strong emphasis on cybersecurity. 
      My goal is to contribute to the IT field by creating secure software solutions that protect user data 
      and enhance system integrity. I aspire to gain hands-on experience in project management and 
      cybersecurity, preparing myself for a long-term career where I can effectively bridge the gap between 
      innovative software development and robust security practices.
      </p>
      <a href="/src/assets/TannerHuntusResume2024.1.pdf" className="btn" target="_blank" rel="noopener noreferrer">View My Resume</a>
    </div>
  );
  
  export default About;