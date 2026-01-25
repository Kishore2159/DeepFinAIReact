import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import './Careers.css';

const jobsData = [
  {
    id: 1,
    title: 'Senior IT Consultant',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    department: 'Consulting'
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    location: 'Bengaluru, India',
    type: 'Full-time',
    department: 'Engineering'
  },
  {
    id: 3,
    title: 'Data Scientist (AI Focus)',
    location: 'Remote',
    type: 'Contract',
    department: 'Analytics'
  }
];

const Careers = () => {
  return (
    <section className="careers-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="careers-header"
      >
        <h2 className="section-title">Join Our <span className="highlight">Team</span></h2>
        <p className="section-subtitle">Build the future with us. Explore exciting opportunities at DeepFin AI.</p>
      </motion.div>

      <div className="jobs-container">
        {jobsData.map((job, index) => (
          <motion.div
            key={job.id}
            className="job-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="job-info">
              <span className="job-dept">{job.department}</span>
              <h3 className="job-title">{job.title}</h3>
              <div className="job-meta">
                <span className="meta-item"><MapPin size={14} /> {job.location}</span>
                <span className="meta-item"><Clock size={14} /> {job.type}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="careers-footer">
        <p>Don't see a perfect fit? Send your resume to <a href="mailto:info@deepfinai.net">info@deepfinai.net</a></p>
      </div>
    </section>
  );
};

export default Careers;
