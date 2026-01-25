import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <section className="contact-section">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <p className="section-subtitle">Have a project in mind or need expert advice? Let's talk.</p>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="info-item">
            <div className="icon-box"><Mail size={24} /></div>
            <div>
              <h3>Email Us</h3>
              <p>info@deepfinai.net</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="icon-box"><MapPin size={24} /></div>
            <div>
              <h3>Location</h3>
              <p>Global presence with headquarters in the Cloud.</p>
            </div>
          </div>

        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30, y: -10 }}
          animate={{ opacity: 1, x: 0, y: -10 }}
          transition={{ delay: 0.4 }}
        >
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help you?" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
