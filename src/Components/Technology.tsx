import React from 'react';
import '../Styles/Technology.css';

const technologies = [
  { name: "Cohetes", description: "Vehículos que nos permiten salir de la Tierra y explorar el espacio." },
  { name: "Rovers", description: "Robots que exploran otros planetas, como el rover Perseverance en Marte." },
  { name: "Estación Espacial Internacional", description: "Un laboratorio en órbita donde científicos realizan investigaciones únicas." },
  { name: "Telescopios Espaciales", description: "Instrumentos que observan el universo desde fuera de la atmósfera terrestre, como el Hubble." },
  { name: "Satélites", description: "Aparatos que orbitan la Tierra para comunicaciones, navegación y observación." },
  { name: "Sondas Espaciales", description: "Vehículos no tripulados que exploran otros planetas y el espacio profundo." },
  { name: "Paneles Solares", description: "Fuentes de energía renovable usadas en naves y estaciones espaciales." },
  { name: "Herramientas de Mantenimiento", description: "Equipos especiales para trabajar en ambientes sin gravedad y en vacío." },
];

const Technology: React.FC = () => {
  return (
    <section className="technology-section">
      <h1>Tecnología</h1>
      <h2>Tecnología Espacial</h2>
      <div className="technology-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-card">
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
