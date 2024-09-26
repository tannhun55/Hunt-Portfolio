import React from 'react';
import './ServicesStyle.css'; //CSS file

const Services = () => (
  <div className="services-container">
    <h1>Our Services</h1>
    <div className="service">
      <img src="/assets/general-programming.jpg" alt="Service 1" className="service-image" />
      <div className="service-info">
        <h2>General Programming</h2>
        <p>We offer general programming services to help you build robust and efficient software solutions.</p>
      </div>
    </div>
    <div className="service">
      <img src="/assets/web-development.jpg" alt="Service 2" className="service-image" />
      <div className="service-info">
        <h2>Web Development</h2>
        <p>Our web development services include creating responsive and dynamic websites tailored to your needs.</p>
      </div>
    </div>
    <div className="service">
      <img src="/assets/mobile-apps.jpg" alt="Service 3" className="service-image" />
      <div className="service-info">
        <h2>Mobile Apps</h2>
        <p>We develop mobile applications that provide a seamless user experience on both iOS and Android platforms.</p>
      </div>
    </div>
  </div>
);

export default Services;