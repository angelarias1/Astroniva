import React from 'react';
import '../Styles/Missions.css';

interface Mission {
  name: string;
  date: string;
  objective: string;
  image: string;
  highlights: string[];
  icon: string;
}

const missions: Mission[] = [
  {
    name: "Apollo 11",
    date: "16 de julio de 1969",
    objective: "Primer alunizaje tripulado en la Luna",
    image: "/Apolo.jpg",
    highlights: ["Primeros humanos en la Luna", "Inspiración global"],
    icon: "🌕"
  },
  {
    name: "Voyager 1",
    date: "5 de septiembre de 1977",
    objective: "Explorar el sistema solar exterior y el espacio interestelar",
    image: "/Voyager.jpg",
    highlights: ["Datos sobre Júpiter y Saturno", "Actual posición fuera del sistema solar"],
    icon: "🛰️"
  },
  {
    name: "Curiosity Rover",
    date: "6 de agosto de 2012",
    objective: "Explorar la superficie de Marte",
    image: "/Curiosity Rover.jpg",
    highlights: ["Análisis de suelo marciano", "Búsqueda de signos de vida pasada"],
    icon: "🚗"
  },
  {
    name: "Hubble Space Telescope",
    date: "24 de abril de 1990",
    objective: "Capturar imágenes del espacio profundo",
    image: "/Hubble.jpg",
    highlights: ["Fotos de galaxias distantes", "Estudios sobre el universo"],
    icon: "🔭"
  },
  {
    name: "Cassini-Huygens",
    date: "15 de octubre de 1997",
    objective: "Explorar Saturno y sus lunas",
    image: "/Cassini.jpg",
    highlights: ["Descubrimiento de océanos en Encélado", "Análisis de los anillos de Saturno"],
    icon: "🪐"
  },
  {
    name: "Mars Pathfinder",
    date: "4 de julio de 1997",
    objective: "Desarrollo de tecnología de aterrizaje en Marte",
    image: "/Pathfinder.jpg",
    highlights: ["Primer rover en Marte", "Análisis de atmósfera y suelo"],
    icon: "🚀"
  },
  {
    name: "New Horizons",
    date: "19 de enero de 2006",
    objective: "Explorar Plutón y el cinturón de Kuiper",
    image: "/NewHorizons.jpg",
    highlights: ["Fotos cercanas de Plutón", "Estudios de cuerpos transneptunianos"],
    icon: "🌌"
  },
  {
    name: "Sputnik 1",
    date: "4 de octubre de 1957",
    objective: "Primer satélite artificial en órbita",
    image: "/Sputnik.jpg",
    highlights: ["Primera transmisión espacial", "Inicio de la carrera espacial"],
    icon: "🛰️"
  },
];

const Missions: React.FC = () => {
  return (
    <section className="missions-section">
      <h2>Misiones Espaciales Emblemáticas</h2>
      <div className="missions-grid">
        {missions.map((mission, index) => (
          <div key={index} className="mission-card">
            <img src={mission.image} alt={mission.name} className="mission-image" />
            <div className="mission-info">
              <h3>{mission.icon} {mission.name}</h3>
              <p><strong>Fecha:</strong> {mission.date}</p>
              <p><strong>Objetivo:</strong> {mission.objective}</p>
              <ul className="highlights">
                {mission.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Missions;
