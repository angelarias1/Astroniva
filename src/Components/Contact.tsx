import React from 'react';
import '../Styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2>Contáctanos</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
