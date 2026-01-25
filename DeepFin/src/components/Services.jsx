import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, TrendingUp, ArrowRight } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Code size={48} strokeWidth={1.5} />,
    title: 'IT Consulting',
    description: 'Reimagine your digital landscape. We deliver strategic technology advice and implement transformational solutions in Cloud, Cybersecurity, and Artificial Intelligence.',
    color: '#64ffda'
  },
  {
    icon: <Users size={48} strokeWidth={1.5} />,
    title: 'Staffing Solutions',
    description: 'Talent that drives innovation. We connect leading enterprises with top-tier engineering and IT experts for mission-critical projects.',
    color: '#00f3ff'
  },
  {
    icon: <TrendingUp size={48} strokeWidth={1.5} />,
    title: 'Financial Analytics',
    description: 'Unlock the power of your data. Our real-time market insights and predictive modeling empower you to make smarter, faster financial decisions.',
    color: '#8892b0'
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <h2 className="section-title">Our <span className="highlight">Expertise</span></h2>
        <p className="section-subtitle">We combine deep industry knowledge with technology expertise to create solutions that drive value.</p>
      </motion.div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="service-content">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
            <div className="service-footer">
              <span className="learn-more">Read More <ArrowRight size={18} /></span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
