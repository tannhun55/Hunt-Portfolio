import React from 'react';
import './ServicesStyle.css'; //CSS file

// HTML Coding to produce the Services page
const Services = () => (
  <div className="services-container">
    <h1>Our Services</h1>
    <div className="service">
      <img src="\src\assets\Programming_photo.jpg" alt="Service 1" className="service-image" />
      <div className="service-info">
        <h2>General Programming</h2>
        <p>We offer general programming services to help you build robust 
          and efficient software solutions with a focus on security
          </p>
      </div>
    </div>
    <div className="service">
      <img src="\src\assets\Cybersecurity_photo.jpg" alt="Service 2" className="service-image" />
      <div className="service-info">
        <h2>Cybersecurity</h2>
        <p>Safeguard Your Digital Assets with Our Cybersecurity Expertise</p>
      </div>
    </div>
    <div className="service">
      <img src="\src\assets\Project_Management.jpg" alt="Service 3" className="service-image" />
      <div className="service-info">
        <h2>Project Management</h2>
        <p>Efficient Project Management for Seamless Execution and Success</p>
      </div>
    </div>
  </div>
);

export default Services;