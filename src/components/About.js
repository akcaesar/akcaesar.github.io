import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p>
        I’m Akshay, a hybrid machine learning engineer, mechanical engineer, and project leader.
        I bridge code and real-world systems to deliver solutions that push boundaries.
      </p>
    </motion.div>
  );
}

export default About;