import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const contacts = [
    { icon: <FaEnvelope />, label: 'Email', value: 'akshay@example.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/akshayshewatkar' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/akshayshe' },
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
        📬 Contact Me
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contacts.map((contact, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ marginRight: '1rem', fontSize: '1.5rem', color: '#64B5F6' }}>
              {contact.icon}
            </div>
            <div>
              <strong>{contact.label}:</strong>{' '}
              <a
                href={
                  contact.label === 'Email'
                    ? `mailto:${contact.value}`
                    : `https://${contact.value}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                {contact.value}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Contact;
