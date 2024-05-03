import React from 'react';
import htmlIcon from '../assets/html-icon.png';  
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/javascript-icon.png';
import reactIcon from '../assets/react-icon.png';


const Skills = () => {
  const skills = [
    { name: "HTML", icon: htmlIcon, description: "Estruturação de páginas web com HTML5." },
    { name: "CSS", icon: cssIcon, description: "Estilização avançada com CSS3, incluindo Flexbox e Grid." },
    { name: "JavaScript", icon: jsIcon, description: "Lógica de programação e interatividade com JavaScript ES6+." },
    { name: "React", icon: reactIcon, description: "Construção de interfaces de usuário com React." },

  ];

  return (
    <section id="skills" className="bg-pink-200 p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Minhas Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="w-20 h-20 mx-auto"/>
            <h3 className="text-xl font-bold mt-2">{skill.name}</h3>
            <p className="hidden">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
