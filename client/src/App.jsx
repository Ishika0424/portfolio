import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <div className="background-animation"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; 2026 Ishika Garg. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
