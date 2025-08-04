import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react'; // Usando ícones da biblioteca lucide-react
import blythe  from './../../assets/blythe.png'
import normal from './../../assets/normal.jpeg'

function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const photo1 = blythe;
  const photo2 = normal;

  const descriptiveText = "Desenvolvedora de software apaixonada por criar soluções eficientes e elegantes, com foco em tecnologias web modernas e uma dedicação constante ao aprendizado e à inovação.";

  return (
    <div className="bg-neutral-800 min-h-screen flex items-center justify-center font-inter">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true" 
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl w-full">
        
        <div
          className="relative transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={isHovering ? photo2 : photo1}
            alt="Foto de perfil de Laura Santos"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide">
            Laura Santos
          </h1>
          
          <p className="mt-4 text-sm md:text-base lg:text-lg text-neutral-300 max-w-md">
            {descriptiveText}
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-transform duration-300 hover:scale-125"
            >
              <Linkedin size={32} />
            </a>

            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-transform duration-300 hover:scale-125"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
