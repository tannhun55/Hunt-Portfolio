import React from 'react';
import { Link } from 'react-router-dom';
import './LayoutStyle.css'; // Ensure you import the CSS file

/* 
 * File: Layout.jsx
 * Student's Name: Tanner Huntus
 * StudentID: 301331363
 * Date: 2024-10-01
 */

//HTML Coding to produce the layout of the website
//Javascript code to handle the layout of the website
const Layout = ({ children }) => (
  <div>
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/CrowLogo3.jpg" alt="logo" /> {/* Logo Image Obtained through Pixel Free Photos */}
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