import React from 'react';
import '../Styles/Resources.css';

const resources = [
  { title: "Cosmos de Carl Sagan", type: "Libro", description: "Una exploración de la vida y el universo." },
  { title: "El Universo de Stephen Hawking", type: "Documental", description: "Una serie sobre los misterios del universo." },
  { title: "NASA", type: "Sitio web", description: "Sitio oficial de la NASA con noticias y recursos." },
];

const Resources: React.FC = () => {
  return (
    <section className="resources-section">
      <h2>Recursos Adicionales</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <p><strong>{resource.type}</strong> - {resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
