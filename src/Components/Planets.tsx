import React from 'react';
import '../Styles/Planets.css';

const planets = [
  { name: "Sol", description: "La estrella central de nuestro sistema solar.", icon: "sol.png" },
  { name: "Mercurio", description: "El planeta más cercano al sol.", icon: "Mercurio.png" },
  { name: "Venus", description: "El planeta más caliente del sistema solar.", icon: "/venus.png" },
  { name: "Tierra", description: "Nuestro hogar, el tercer planeta desde el sol.", icon: "/tierra.png" },
  { name: "Marte", description: "Conocido como el planeta rojo.", icon: "/marte.png" },
  { name: "Júpiter", description: "El planeta más grande del sistema solar.", icon: "/jupiter.png" },
  { name: "Saturno", description: "Famoso por sus anillos brillantes.", icon: "/saturno.png" },
  { name: "Urano", description: "Un planeta que gira de lado y tiene un color azul verdoso.", icon: "/urano.png" },
  { name: "Neptuno", description: "El planeta más lejano y el más ventoso.", icon: "/neptuno.png" },
  { name: "Luna", description: "El único satélite natural de la Tierra.", icon: "/luna.png" },
];

const Planets: React.FC = () => {
  return (
    <section className="planets-section">
      <h2>Explora los Planetas</h2>
      <div className="planets-grid">
        {planets.map((planet, index) => (
          <div key={index} className="planet-card">
            <img src={planet.icon} alt={`${planet.name} icon`} className="planet-icon" />
            <h3>{planet.name}</h3>
            <p>{planet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planets;
