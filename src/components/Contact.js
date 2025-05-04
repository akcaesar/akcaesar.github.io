import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p>Email: ashewatkar713@gmail.com</p>
      <p>Phone: +49 17632622824</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/akshay-ns" className="text-blue-400">akshay-ns</a></p>
    </motion.div>
  );
}

export default Contact;