import React from 'react';
import { motion } from 'framer-motion';

function About({ lang }) {
  const text = {
    en: {
      title: "Akshay Narendra Shewatkar",
      role: "AI/ML Engineer | Deep Learning | Backend Developer",
      desc: "I’m passionate about building intelligent systems that solve real-world problems.",
    },
    de: {
      title: "Akshay Narendra Shewatkar",
      role: "KI/ML-Ingenieur | Deep Learning | Backend-Entwickler",
      desc: "Ich entwickle leidenschaftlich intelligente Systeme, die reale Probleme lösen.",
    },
  };

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
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>{text[lang].title}</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{text[lang].role}</p>
      <p style={{ marginTop: '1.5rem' }}>{text[lang].desc}</p>
    </motion.div>
  );
}

export default About;
