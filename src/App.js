import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/pgbackground';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'black', overflowY: 'auto' }}>
      <ParticlesBackground />

      <Router>
        <nav
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-around',
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">About</Link>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/achievements">Achievements</Link>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/projects">Projects</Link>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link>
        </nav>

        {/* Route-based rendering area */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            padding: '2rem',
            paddingTop: '5rem',
          }}
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
