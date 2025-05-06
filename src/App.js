import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/pgbackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('en'); // 'en' or 'de'

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'de' : 'en'));

  const themeStyles = {
    backgroundColor: darkMode ? '#000' : '#f4f4f4',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1,
  };

  return (
    <div style={themeStyles}>
      {/* ✅ Keeps your animated background always rendered behind */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, width: '100vw', height: '100vh' }}>
      <ParticlesBackground darkMode={darkMode} />

      </div>

      {/* ✅ Foreground content rendered above */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          {/* Top bar for toggles */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '1rem' }}>
            <button onClick={toggleDarkMode} style={toggleButton}>
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button onClick={toggleLang} style={toggleButton}>
              {lang === 'en' ? 'DE 🇩🇪' : 'EN 🇬🇧'}
            </button>
          </div>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem',
            backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
          }}>
            <Link style={navLinkStyle(darkMode)} to="/">About</Link>
            <Link style={navLinkStyle(darkMode)} to="/achievements">Achievements</Link>
            <Link style={navLinkStyle(darkMode)} to="/projects">Projects</Link>
            <Link style={navLinkStyle(darkMode)} to="/contact">Contact</Link>
          </nav>

          {/* Routes */}
          <div style={{ padding: '2rem' }}>
            <Routes>
              <Route path="/" element={<About lang={lang} />} />
              <Route path="/achievements" element={<Achievements lang={lang} />} />
              <Route path="/projects" element={<Projects lang={lang} />} />
              <Route path="/contact" element={<Contact lang={lang} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

const toggleButton = {
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  backgroundColor: '#64B5F6',
  color: 'white',
};

const navLinkStyle = (darkMode) => ({
  color: darkMode ? 'white' : 'black',
  textDecoration: 'none',
  fontWeight: 'bold',
});

export default App;