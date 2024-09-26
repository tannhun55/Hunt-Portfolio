import React from 'react';
import { Link } from 'react-router-dom';
import './HomeStyle.css'; //CSS file

const Home = () => (
  <div className="home-container">
    <h1>Welcome to My Portfolio</h1>
    <p className="mission-statement">My mission is to create impactful and innovative solutions through technology.</p>
    <div className="home-buttons">
      <Link to="/about" className="btn">About Me</Link>
      <Link to="/services" className="btn">Services</Link>
      <Link to="/project" className="btn">Projects</Link>
      <Link to="/contact" className="btn">Contact</Link>
    </div>
  </div>
);

export default Home;