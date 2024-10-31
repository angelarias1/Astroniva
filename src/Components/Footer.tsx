import React from 'react';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Astronova - Todos los derechos reservados</p>
      <div className="social-icons">
        <a href="#twitter" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#facebook" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
