import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-4xl font-bold mb-4">Achievements</h1>
      <ul className="list-disc ml-6">
        <li>Published: Enhancing Gauge Image Quality in Smoke Scenes via Deep Learning (SPIE 2023).</li>
        <li>Prototyped RAG-based PDF extraction with vector search + LLMs.</li>
        <li>Built synthetic datasets with Unreal Engine for ML training.</li>
        <li>Led backend development with FastAPI/Django, Celery, Redis.</li>
      </ul>
    </motion.div>
  );
}

export default Achievements;