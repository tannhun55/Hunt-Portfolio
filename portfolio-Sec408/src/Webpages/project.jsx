import React from 'react';
import './ProjectStyle.css'; //CSS file

export default function Project() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project">
                <img src="/assets/project1.jpg" alt="Project 1" className="project-image" />
                <div className="project-info">
                    <h2>Project Title 1</h2>
                    <p>Role: Developer</p>
                    <p>Outcome: Successfully built a responsive web application using React and Node.js.</p>
                </div>
            </div>
            <div className="project">
                <img src="/assets/project2.jpg" alt="Project 2" className="project-image" />
                <div className="project-info">
                    <h2>Project Title 2</h2>
                    <p>Role:</p>
                    <p>Information.</p>
                </div>
            </div>
            <div className="project">
                <img src="/assets/project3.jpg" alt="Project 3" className="project-image" />
                <div className="project-info">
                    <h2>Project Title 3</h2>
                    <p>Role:</p>
                    <p>Role</p>
                </div>
            </div>
        </div>
    );
}