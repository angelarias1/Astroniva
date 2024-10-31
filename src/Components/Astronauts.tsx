import React from 'react';
import '../Styles/Astronauts.css';

interface Astronaut {
  name: string;
  achievements: string;
  image: string;
  description: string;
  icon: string;
}

const astronauts: Astronaut[] = [
  { 
    name: 'Neil Armstrong', 
    achievements: 'Primer hombre en la Luna', 
    image: '/Neil Armstrong.jpg', 
    description: 'Comandante de la misión Apollo 11. Su famosa frase "Un pequeño paso para el hombre, un gran salto para la humanidad" marcó un hito en la historia.',
    icon: '🚀' 
  },
  { 
    name: 'Buzz Aldrin', 
    achievements: 'Segundo hombre en la Luna', 
    image: '/Buzz Aldrin.jpg', 
    description: 'Piloto del módulo lunar de la misión Apollo 11. Uno de los primeros en explorar la superficie lunar junto a Neil Armstrong.',
    icon: '🌕' 
  },
  { 
    name: 'Yuri Gagarin', 
    achievements: 'Primer humano en el espacio', 
    image: '/Yuri Gagarin.jpg', 
    description: 'Cosmonauta soviético que orbitó la Tierra en 1961 a bordo del Vostok 1, abriendo el camino a la exploración espacial humana.',
    icon: '🛰️' 
  },
  { 
    name: 'Valentina Tereshkova', 
    achievements: 'Primera mujer en el espacio', 
    image: '/Valentina_Tereshkova.jpg', 
    description: 'Viajó al espacio en 1963 a bordo del Vostok 6, siendo la primera mujer en realizar esta hazaña histórica.',
    icon: '👩‍🚀' 
  },
  { 
    name: 'John Glenn', 
    achievements: 'Primer estadounidense en orbitar la Tierra', 
    image: '/John_Glenn.jpg', 
    description: 'Senador y astronauta, orbitó la Tierra en 1962 a bordo del Friendship 7 y volvió al espacio a los 77 años en el Transbordador Espacial Discovery.',
    icon: '🌍' 
  },
  { 
    name: 'Sally Ride', 
    achievements: 'Primera mujer estadounidense en el espacio', 
    image: '/Sally_Ride.jpg', 
    description: 'Voló en la misión STS-7 del Challenger en 1983, rompiendo barreras de género en la exploración espacial.',
    icon: '🧑‍🚀' 
  },
  { 
    name: 'Chris Hadfield', 
    achievements: 'Primer canadiense en comandar la ISS', 
    image: '/Chris _Hadfield.jpg', 
    description: 'Comandante de la Estación Espacial Internacional, conocido por su carisma y su versión de "Space Oddity" desde el espacio.',
    icon: '🎸' // Guitarra, para representar su famoso cover de "Space Oddity" en el espacio
  },
  { 
    name: 'Laika', 
    achievements: 'Primer ser vivo en órbita', 
    image: '/Laika.jpg', 
    description: 'Perra soviética lanzada en el Sputnik 2 en 1957. Aunque no sobrevivió al viaje, su misión mostró que los seres vivos podían soportar el lanzamiento espacial.',
    icon: '🐕' 
  },
  { 
    name: 'Mae Jemison', 
    achievements: 'Primera mujer afroamericana en el espacio', 
    image: '/Mae_Jemison.jpg', 
    description: 'Médica y astronauta, voló en el Endeavour en 1992 y es una pionera en la inclusión en la ciencia espacial.',
    icon: '💫' // Brillo, representando su impacto pionero
  },
  { 
    name: 'Alan Shepard', 
    achievements: 'Primer estadounidense en el espacio', 
    image: '/Alan Shepard.jpg', 
    description: 'Voló en la misión Mercury-Redstone 3 en 1961 y luego caminó en la Luna durante la misión Apollo 14.',
    icon: '🧑‍🚀'
  },
  { 
    name: 'Peggy Whitson', 
    achievements: 'Astronauta con más tiempo acumulado en el espacio', 
    image: '/Peggy_Whitson.jpg', 
    description: 'Acumuló 665 días en el espacio y fue la primera mujer en comandar la Estación Espacial Internacional dos veces.',
    icon: '🕰️' // Reloj, para representar su récord de tiempo en el espacio
  },
  { 
    name: 'Tim Peake', 
    achievements: 'Primer astronauta oficial del Reino Unido en la ISS', 
    image: '/Tim_Peake.jpg', 
    description: 'Realizó una misión de seis meses en la ISS en 2015-2016 y trabajó en varios experimentos científicos.',
    icon: '🔬' // Microscopio, representando la ciencia y experimentos en el espacio
  }
];


const Astronauts: React.FC = () => {
  return (
    <section className="astronauts-section">
      <h2>Astronautas Icónicos</h2>
      <div className="astronauts-grid">
        {astronauts.map((astronaut, index) => (
          <div key={index} className="astronaut-card">
            <img src={astronaut.image} alt={astronaut.name} />
            <h3>{astronaut.icon} {astronaut.name}</h3>
            <p className="achievement">{astronaut.achievements}</p>
            <p className="description">{astronaut.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Astronauts;
