import React from 'react';
import { Link } from 'react-router-dom';
import './LayoutStyle.css'; // Ensure you import the CSS file

const Layout = ({ children }) => (
  <div>
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/PortLogo.jpg" alt="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <div className="content">
      {children}
    </div>
  </div>
);

export default Layout;