import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaDatabase, FaGlobe } from 'react-icons/fa';

function Projects() {
  const projects = [
    { icon: <FaLaptopCode />, name: 'AI Dashboard', description: 'Built a real-time analytics dashboard using React, FastAPI, and Redis.' },
    { icon: <FaDatabase />, name: 'RAG PDF Toolkit', description: 'Designed a retrieval-augmented generation tool using LangChain and Pinecone.' },
    { icon: <FaGlobe />, name: 'Portfolio Website', description: 'This portfolio! React + animations + clean UI.' },
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
        💻 Projects
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map((project, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ marginRight: '1rem', fontSize: '1.5rem', color: '#81C784' }}>
              {project.icon}
            </div>
            <div>
              <h2 style={{ margin: 0 }}>{project.name}</h2>
              <p style={{ margin: 0 }}>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Projects;
