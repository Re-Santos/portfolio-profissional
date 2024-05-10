import React from 'react';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/javascript-icon.png';
import reactIcon from '../assets/react-icon.png';
import tailwindIcon from '../assets/tailwind-icon.png';  // Assuma que o ícone está adicionado ao diretório de assets
import nodeIcon from '../assets/node-icon.png';         // Assuma que o ícone está adicionado ao diretório de assets
import gitIcon from '../assets/git-icon.png';           // Assuma que o ícone está adicionado ao diretório de assets
import tsIcon from '../assets/typescript-icon.png';     // Assuma que o ícone está adicionado ao diretório de assets

const Skills = () => {
  const skills = [
    { name: "HTML", icon: htmlIcon, description: "Estruturação de páginas web com HTML5." },
    { name: "CSS", icon: cssIcon, description: "Estilização avançada com CSS3, incluindo Flexbox e Grid." },
    { name: "JavaScript", icon: jsIcon, description: "Lógica de programação e interatividade com JavaScript ES6+." },
    { name: "React", icon: reactIcon, description: "Construção de interfaces de usuário com React." },
    { name: "TailwindCSS", icon: tailwindIcon, description: "Desenvolvimento de UIs modernas com TailwindCSS." },
    { name: "Node.js", icon: nodeIcon, description: "Construção de APIs e back-end com Node.js." },
    { name: "Git", icon: gitIcon, description: "Controle de versões e colaboração com Git." },
    { name: "TypeScript", icon: tsIcon, description: "Desenvolvimento robusto com TypeScript." }
  ];

  return (
    <section id="skills" className="bg-pink-200 p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Minhas Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card group">
            <img src={skill.icon} alt={skill.name} className="w-20 h-20 mx-auto"/>
            <h3 className="text-xl font-bold mt-2">{skill.name}</h3>
            <p className="description hidden group-hover:block">{skill.description}</p>  {/* Mostra a descrição ao passar o mouse */}
          </div>
        ))}
      </div>
      <div className="mt-8 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </section>
  );
};

export default Skills;
