import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactStyle.css'; // CSS file

/* 
 * File: contact.jsx
 * Student's Name: Tanner Huntus
 * StudentID: 301331363
 * Date: 2024-10-01
 */

// HTML Coding to produce the Contact page
//Javascript code to handle the form data
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handling form data to be sent to a server - Not implemented
    console.log('Form Data:', formData);
    // When the user hits "Send Message", the user will be redirected to the home page
    window.location.href = '/#home';
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>Email: tannhun5@gmail.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 607 Address, Toronto, ON., Canada</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;