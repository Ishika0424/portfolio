import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="container">
      <div className="section-title">
        <h2>Let's Connect</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-card">
        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        
        {/* Contact Form Added for MERN functionality */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', resize: 'vertical' }}
          ></textarea>
          <button type="submit" className="btn primary" style={{ cursor: 'pointer', border: 'none' }}>Send Message</button>
          {status && <p style={{ color: status.includes('success') ? '#4caf50' : '#f44336' }}>{status}</p>}
        </form>

        <div className="contact-info">
          <a href="mailto:ishika.garg2404@gmail.com" className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            ishika.garg2404@gmail.com
          </a>
        </div>
        <div className="social-links">
          <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
