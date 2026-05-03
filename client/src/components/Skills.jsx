import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/skills')
      .then(res => setSkills(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section id="skills" className="container">
      <div className="section-title">
        <h2>Core Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-chip" key={skill._id}>
            <i className={skill.icon}></i> {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
