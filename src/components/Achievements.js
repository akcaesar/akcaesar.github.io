import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRobot, FaCogs, FaFileAlt } from 'react-icons/fa';

function Achievements() {
  const items = [
    { icon: <FaFileAlt />, text: 'Published: Enhancing Gauge Image Quality in Smoke Scenes via Deep Learning (SPIE 2023).' },
    { icon: <FaRobot />, text: 'Prototyped RAG-based PDF extraction with vector search + LLMs.' },
    { icon: <FaCogs />, text: 'Built synthetic datasets with Unreal Engine for ML training.' },
    { icon: <FaTrophy />, text: 'Led backend development with FastAPI/Django, Celery, Redis.' },
  ];

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
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        🏆 Achievements
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ marginRight: '1rem', fontSize: '1.5rem', color: '#FFD700' }}>
              {item.icon}
            </div>
            <p style={{ margin: 0 }}>{item.text}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Achievements;
