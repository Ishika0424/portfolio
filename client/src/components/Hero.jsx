import React from 'react';

const Hero = () => {
  return (
    <header id="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Ishika Garg</span></h1>
        <h2>AIML Engineer <span className="divider">|</span> Building Intelligent Systems</h2>
        <p>Pre-final year B.Tech student with an academic focus on AIML, possessing foundational knowledge of Python, data structures, and DBMS, and motivated to learn, collaborate, and apply emerging technologies to practical problem-solving.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Get In Touch</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
