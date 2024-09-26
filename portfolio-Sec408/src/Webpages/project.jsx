import React from 'react';
import './ProjectStyle.css'; // CSS file

// HTML Coding to produce the Project page
export default function Project() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project">
                <img src="\src\assets\Webhosting.jpg" alt="Project 1" className="project-image" />
                <div className="project-info">
                    <h2>Web-Hosting Service</h2>
                    <p>Role: Full Stack Developer</p>
                    <p>Status: Project is in early stages of development</p>
                    <p>Description: With data storage in mind, it is difficult to find a place to storage
                        your files. This project is a web-hosting service that allows users to store their
                        files in a secure location.
                    </p>
                </div>
            </div>
            <div className="project">
                <img src="\src\assets\Honeypot.jpg" alt="Project 2" className="project-image" />
                <div className="project-info">
                    <h2>Honeypot</h2>
                    <p>Role: IT Solutions</p>
                    <p>Status: Project is in early stages of development.</p>
                    <p>Description: Our honeypot project aims to create a decoy system that attracts cyber attackers, 
                       allowing us to study their behaviors and tactics in a controlled environment. By analyzing the data collected, 
                       we will enhance our threat intelligence and strengthen our overall cybersecurity defenses.</p>
                </div>
            </div>
        </div>
    );
}