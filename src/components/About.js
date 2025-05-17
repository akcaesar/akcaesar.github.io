import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDocker, FaGithub, FaLanguage, FaRobot } from 'react-icons/fa';

function About({ lang }) {
  const text = {
    en: {
      title: "Akshay Narendra Shewatkar",
      role: "AI/ML Engineer · Deep Learning Specialist · Full-Stack Innovator",
      desc: `
        Hi, I’m Akshay Shewatkar — a multilingual engineer passionate about building intelligent systems that make a difference. I speak English, Hindi, Marathi, and German, and I enjoy working at the intersection of AI, robotics, and backend systems.

My journey started at IIT Indore, where I led the steering design for our BAJA ATV and co-developed an SMA-actuated aquatic robot that later evolved into an ongoing research line. That project won the Best BTP award and sparked my interest in intelligent automation. After a few years of industrial experience in India, I moved to Germany in 2019 to pursue my Master’s in Robotic Systems Engineering at RWTH Aachen.

Since then, I’ve worked in technical consultancy, explored future tech like quantum computing, and contributed to AI research at the German Aerospace Center. My thesis focused on using deep learning to enhance visibility of analog gauge images in smoke-heavy environments — now part of a published and functioning solution pipeline.

I currently build scalable machine learning services, create custom datasets, and develop backend pipelines using tools like PyTorch, FastAPI, and Docker. Outside of work, I’m into basketball, table tennis, and playing guitar — I’ve even performed at musical events in both India and Germany.

To me, engineering is more than building systems — it's about connecting people, ideas, and technology to create something truly impactful.
      `,
    },
    de: {
      title: "Akshay Narendra Shewatkar",
      role: "KI/ML-Ingenieur · Deep-Learning-Spezialist · Full-Stack-Innovator",
      desc: `
        Hallo, ich bin Akshay Shewatkar — ein mehrsprachiger Ingenieur mit Leidenschaft für intelligente Systeme, die wirklich etwas bewirken. Ich spreche Englisch, Hindi, Marathi und Deutsch und arbeite gerne an der Schnittstelle von KI, Robotik und Backend-Systemen.

Meine Reise begann am IIT Indore, wo ich die Lenkung für unser BAJA-ATV leitete und gemeinsam mit zwei Freunden einen SMA-gesteuerten Aquabot entwickelte – ein Projekt, das den Preis für das beste BTP gewann und inzwischen weiter erforscht wird. Nach ein paar Jahren Industrieerfahrung in Indien zog ich 2019 nach Deutschland, um meinen Master in Robotic Systems Engineering an der RWTH Aachen zu machen.

Seitdem habe ich in der technischen Beratung gearbeitet, mich mit Zukunftstechnologien wie Quantencomputing beschäftigt und beim Deutschen Zentrum für Luft- und Raumfahrt an KI-Forschung mitgewirkt. In meiner Masterarbeit ging es darum, analoge Messanzeigen in rauchgefüllten Umgebungen mithilfe von Deep Learning besser sichtbar zu machen – das Projekt wurde veröffentlicht und fließt in reale Anwendungen ein.

Aktuell entwickle ich skalierbare ML-Dienste, erstelle eigene Datensätze und baue Backend-Pipelines mit Tools wie PyTorch, FastAPI und Docker. Abseits des Berufs spiele ich Basketball und Tischtennis und trete als Gitarrist bei Musikveranstaltungen in Indien und Deutschland auf.

Für mich bedeutet Ingenieurwesen nicht nur Technik – sondern auch, Menschen, Ideen und Technologien zu verbinden, um wirklich etwas zu bewegen.
      `,
    },
  };

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.06)',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
        color: '#f0f0f0',
        fontFamily: 'Inter, sans-serif',
        lineHeight: '1.7',
      }}
    >

      {/* ---- Insert Your Profile Picture Here ---- */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <img
          src="/path/to/your/photo.jpg"  // <---- put your image in public/ folder or use a URL
          alt="Akshay Narendra Shewatkar"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
        />
      </div>

      <h1 style={{
        fontSize: '2.8rem',
        textAlign: 'center',
        marginBottom: '0.5rem',
        fontWeight: 'bold'
      }}>{text[lang].title}</h1>

      <p style={{
        fontSize: '1.3rem',
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#ccc'
      }}>{text[lang].role}</p>

      {/* ---- Tech Icons ---- */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        fontSize: '2rem',
        marginBottom: '1.5rem',
      }}>
        <FaPython title="Python" />
        <FaDocker title="Docker" />
        <FaGithub title="GitHub" />
        <FaLanguage title="Languages" />
        <FaRobot title="Robotics" />
      </div>

      <p style={{ whiteSpace: 'pre-line', fontSize: '1.1rem' }}>
        {text[lang].desc}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        backgroundColor: '#f0f0f0',
        fontSize: '1.2rem',
        color: '#666',
        textAlign: 'center',
        marginBottom: '2rem',
      }}>
        Site under progress...
      </div>

      {/* ---- Fun Stats Section (Optional) ---- */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '2rem',
        fontSize: '1rem',
      }}>
        <div>
          <strong>4+</strong><br />Languages
        </div>
        <div>
          <strong>5+</strong><br />Projects
        </div>
        <div>
          <strong>3+</strong><br />Countries Worked In
        </div>
      </div>

    </motion.div>
  );
}

export default About;
