import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

function About() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <FaUserCircle style={{ fontSize: '5rem', color: '#4DB6AC' }} />
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Akshay Narendra Shewatkar</h1>
        <p style={{ fontSize: '1.2rem' }}>AI/ML Engineer | Deep Learning | Backend Developer</p>
      </div>
      <p style={{ lineHeight: '1.6' }}>
        I’m passionate about building intelligent systems that solve real-world problems. My experience spans 
        machine learning, deep learning, and backend development with tools like FastAPI, Django, and Celery.
      </p>
    </motion.div>
  );
}

export default About;
