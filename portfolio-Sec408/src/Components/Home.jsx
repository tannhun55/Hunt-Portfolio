import React from 'react';
import { Link } from 'react-router-dom';
import './HomeStyle.css'; //CSS file

/* 
 * File: Home.jsx
 * Student's Name: Tanner Huntus
 * StudentID: 301331363
 * Date: 2024-10-01
 */

//HTML Coding to produce the Home page
//Javascript code to handle the Home page data
const Home = () => (
  <div className="home-container">
    <h1>Discover My Projects</h1>
    <p className="mission-statement">
      I strive to empower software development through a strong focus on cybersecurity, 
      delivering secure and efficient solutions that protect user information and ensure system integrity. 
      My commitment is to create innovative software that prioritizes security at every stage of the 
      development process, fostering trust and reliability in every application.
    </p>
    <img src="\src\assets\SecurityInMind.jpg" alt="Your Name" className="main-photo" />
    <div className="home-buttons">
      <Link to="/about" className="btn">About Me</Link>
      <Link to="/services" className="btn">Services</Link>
      <Link to="/project" className="btn">Projects</Link>
      <Link to="/contact" className="btn">Contact</Link>
    </div>
  </div>
);

export default Home;