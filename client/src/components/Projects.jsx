import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section id="projects" className="container">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="card" key={project._id}>
            <div className="card-icon"><i className={project.icon}></i></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-tech">
              {project.tech.map((t, index) => (
                <span key={index}>{t}</span>
              ))}
            </div>
            {project.githubLink && project.githubLink !== '#' && (
              <a href={project.githubLink} className="card-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i> View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
