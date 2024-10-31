import React from 'react';
import '../Styles/Future.css';

const futureProjects = [
  { name: "Misión a Marte", description: "Exploración humana de Marte para estudiar su habitabilidad." },
  { name: "Turismo Espacial", description: "Viajes espaciales comerciales que pronto serán realidad." },
  { name: "Bases Lunares", description: "Estaciones habitables en la Luna como base para futuras misiones." },
  // Agrega más proyectos aquí
];

const Future: React.FC = () => {
  return (
    <section className="future-section">
      <h2>Futuro de la Exploración Espacial</h2>
      <div className="future-grid">
        {futureProjects.map((project, index) => (
          <div key={index} className="future-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Future;
