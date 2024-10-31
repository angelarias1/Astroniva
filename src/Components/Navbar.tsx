import React, { useState } from 'react';
import '../Styles/Menu.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú automáticamente
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        
        <li className="dropdown">
          <button 
            className="dropdown-toggle" 
            onClick={toggleMenu}
          >
            Exploración Espacial
          </button>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <li><Link to="/timeline" onClick={closeMenu}>Historia</Link></li>
            <li><Link to="/astronauts" onClick={closeMenu}>Astronautas</Link></li>
            <li><Link to="/missions" onClick={closeMenu}>Misiones</Link></li>
          </ul>
        </li>

        <li><Link to="/planets" onClick={closeMenu}>El Sistema Solar</Link></li>
        
        <li><Link to="/technology" onClick={closeMenu}>Tecnología</Link></li>
        
        <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
