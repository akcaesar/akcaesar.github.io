import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <ul className="list-disc ml-6">
        <li>Deep learning pipelines (FFA-Net, AECR-Net) for smoke/haze enhancement.</li>
        <li>Autonomous gauge reader integrating ML + mechanical systems.</li>
        <li>Scalable backend APIs with FastAPI, async tasks, and Redis.</li>
        <li>Project leadership across software + hardware integration.</li>
      </ul>
    </motion.div>
  );
}

export default Projects;