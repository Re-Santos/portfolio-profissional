import React from 'react';
import ProjectCard from '../components/ProjectCard';
import cadastroEscolarImage from '../assets/cadastro-escolar.png';  
import ecommerceFrontendImage from '../assets/e-commerce-frontend.png'; 

const Projects = () => {
  const projects = [
    {
      title: "Cadastro Escolar",
      description: "Uma aplicação React para gerenciar cadastros escolares.",
      imageUrl: cadastroEscolarImage,  
      githubUrl: "https://github.com/Re-Santos/cadastro-escolar",
      deployUrl: "https://cadastroescolar-renatasan.surge.sh/"
    },
    {
      title: "E-commerce Frontend",
      description: "Projeto de e-commerce desenvolvido com React e Styled-Components.",
      imageUrl: ecommerceFrontendImage,
      githubUrl: "https://github.com/Re-Santos/projeto-frontendreact",
      deployUrl: "https://frontendreact-renata-easley.surge.sh/"
    },
  ];

  return (
    <section id="projects" className="bg-purple-200 p-8">
      <h2 className="text-3xl font-bold text-center">Projetos</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
