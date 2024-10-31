import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Timeline from './Components/Timeline';
import Astronauts from './Components/Astronauts';
import Technology from './Components/Technology';
import Planets from './Components/Planets';
import Missions from './Components/Missions';
import Future from './Components/Future';
import Resources from './Components/Resources';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './index.css'; // Estilos generales

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/astronauts" element={<Astronauts />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/future" element={<Future />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
