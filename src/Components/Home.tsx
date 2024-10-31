import React from 'react';
import '../Styles/Home.css';

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>
      <div className="home-content">
        <h1>Explora el Universo</h1>
        <p>
          Un viaje a través de la historia de la exploración espacial, los
          astronautas más icónicos y los avances tecnológicos que nos llevan a
          las estrellas.
        </p>
      </div>
    </section>
  );
};

export default Home;
