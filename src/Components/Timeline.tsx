import React, { useEffect } from 'react';
import '../Styles/Timeline.css';
import { FaRocket, FaSatellite, FaUserAstronaut, FaMoon } from 'react-icons/fa';

const Timeline: React.FC = () => {
  const events = [
    { year: "1957", description: "🌍🚀 Lanzamiento de Sputnik, primer satélite artificial", icon: <FaSatellite /> },
    { year: "1961", description: "👨‍🚀🌌 Yuri Gagarin se convierte en el primer humano en el espacio", icon: <FaUserAstronaut /> },
    { year: "1969", description: "🌕👣 Apollo 11 lleva a los primeros humanos a la Luna", icon: <FaMoon /> },
    { year: "1971", description: "🛰️🏠 Salyut 1, primera estación espacial, es lanzada por la URSS" },
    { year: "1973", description: "🪐📷 Lanzamiento de Pioneer 10, primera sonda en cruzar el cinturón de asteroides y obtener imágenes de Júpiter", icon: <FaRocket /> },
    { year: "1976", description: "🚀🔴 Viking 1 de la NASA aterriza en Marte y envía imágenes de la superficie" },
    { year: "1981", description: "🛸✨ Primer lanzamiento del transbordador espacial Columbia" },
    { year: "1990", description: "🔭🌌 Lanzamiento del telescopio espacial Hubble, que revolucionará la astronomía" },
    { year: "2000", description: "🏢🌍 Se inicia la ocupación continua de la Estación Espacial Internacional (EEI)" },
    { year: "2004", description: "🪐🚀 La sonda Cassini-Huygens llega a Saturno y envía datos impresionantes de sus lunas y anillos" },
    { year: "2012", description: "🚜🔴 Curiosity aterriza en Marte, iniciando una nueva era de exploración del planeta rojo" },
    { year: "2015", description: "🌌📸 New Horizons sobrevuela Plutón, obteniendo las primeras imágenes detalladas del planeta enano" },
    { year: "2020", description: "🚜🚁 Mars 2020 de la NASA envía el rover Perseverance y el dron Ingenuity a Marte" },
    { year: "2021", description: "🔭🌠 James Webb Space Telescope (JWST) es lanzado, abriendo nuevas posibilidades para estudiar el universo" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const timelineEvents = document.querySelectorAll('.timeline-event');
      timelineEvents.forEach((event) => {
        const rect = event.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          event.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="timeline-section">
      <h2>Línea de Tiempo de la Exploración Espacial</h2>
      <div className="event-count">Eventos en la línea de tiempo: {events.length}</div>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="event-header">
              {event.icon && <span className="event-icon">{event.icon}</span>}
              <span className="timeline-year">{event.year}</span>
            </div>
            <p>{event.description}</p>
            {index < events.length - 1 && <div className="timeline-separator"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
