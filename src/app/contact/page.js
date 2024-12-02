'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';

/*This from was programmed by ChatGPT after a prompt that asked for a normal contact from*/
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
        <div className={styles.contact}>
      <h2>Contact me</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button className={styles.mainButton}>Send</button>
      </form>

      {/* Personal Info and Social Media Links */}
      <div className={styles.personalInfo}>
        <p><strong>E-mail:</strong> daniel-felipe.sanchez_ruiz@edu.devinci.fr</p>
        <p><strong>Phone:</strong> +33 7 82 47 65 54</p>
        <div className={styles.socialMedia}>
          <a href="https://ift.devinci.fr/member/daniel-felipe-sanchez_ruiz" target="_blank" rel="noopener noreferrer">Webpage</a>
          <a href="https://www.linkedin.com/in/daniel-felipe-s%C3%A1nchez/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/DanielFSanchez5" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

