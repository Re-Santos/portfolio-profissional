// import React from 'react';
// import avatar from '../assets/renata.png';
// import cv from '../assets/renata-santos-cv.pdf'; 

// const About = () => {
//   return (
//     <section id="about" className="bg-pink-200 p-8 text-center">
//       <div className="flex flex-col items-center justify-center">
//         <img src={avatar} alt="Renata Santos" style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '0 0 15px rgba(128, 0, 128, 0.6)' }} />
//         <h2 className="text-3xl font-bold mt-4">Sobre Mim</h2>
//         <p className="text-justify mt-4 max-w-2xl">
//           Sou <strong>Renata Santos</strong>, desenvolvedora Front-End com uma forte base em Administração e Marketing. Apaixonada por tecnologia e design, tenho experiência na criação de soluções web elegantes e eficazes. Participo ativamente da comunidade de tecnologia, sempre buscando novos aprendizados e compartilhando conhecimentos.
//         </p>
//         <p className="text-justify mt-2 max-w-2xl">
//           Com formação em Administração e especialização em Coaching e Carreira, migrei para a tecnologia após descobrir minha paixão pelo desenvolvimento web. Minha jornada inclui trabalhos autônomos e colaborações em projetos desafiadores que expandem continuamente meu conjunto de habilidades em HTML, CSS, JavaScript, React, e mais.
//         </p>
//         <div className="mt-4">
//           <a href={cv} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Baixar Currículo</a>
//           <a href="https://github.com/Re-Santos" target="_blank" rel="noopener noreferrer" className="ml-4 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">GitHub</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import avatar from '../assets/renata.png';
import cv from '../assets/renata-santos-cv.pdf'; 

const About = () => {
  return (
    <section id="about" className="bg-pink-200 p-8 text-center">
      <div className="flex flex-col items-center justify-center">
        <img src={avatar} alt="Renata Santos" style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '0 0 15px rgba(128, 0, 128, 0.6)' }} />
        <h2 className="text-3xl font-bold mt-4">Sobre Mim</h2>
        <p className="text-justify mt-4 max-w-2xl">
          Sou <strong>Renata Santos</strong>, desenvolvedora Front-End. Apaixonada por tecnologia e design, tenho experiência na criação de soluções web elegantes e eficazes. Participo ativamente da comunidade de tecnologia, sempre buscando novos aprendizados e compartilhando conhecimentos.
        </p>
        <p className="text-justify mt-2 max-w-2xl">
          Com formação em Administração e especialização em Coaching e Carreira, migrei para a tecnologia após descobrir minha paixão pelo desenvolvimento web enquanto empreendia em uma loja virtual. Minha jornada inclui trabalhos autônomos e colaborações em projetos desafiadores que expandem continuamente meu conjunto de habilidades em HTML, CSS, JavaScript, React, e mais.
        </p>
        <div className="mt-4">
          <a href={cv} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Baixar Currículo</a>
          <a href="https://github.com/Re-Santos" target="_blank" rel="noopener noreferrer" className="ml-4 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">GitHub</a>
        </div>
      </div>
      {/* Divisória visual */}
      <div className="mt-8 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </section>
  );
};

export default About;


