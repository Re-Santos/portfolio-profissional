import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Imobiliária Santos",
      description: "Plataforma imobiliária para promoção de propriedades e intermediação de negócios imobiliários.",
      githubUrl: "https://github.com/Re-Santos/imobiliaria-santos",
      deployUrl: "http://imobiliaria-santos-renata.surge.sh/",
      technologies: ["HTML - CSS"]
    },
    {
      title: "OptimusTech",
      description: "Projeto corporativo focado em detalhes operacionais para otimizar o desempenho empresarial.",
      githubUrl: "https://github.com/Re-Santos/optimustech",
      deployUrl: "http://www.optimustech-renata.surge.sh",
      technologies: ["HTML - CSS"]
    }, 
    {
      title: "Labecommerce API",
      description: "API para e-commerce que permite a gestão de produtos e usuários com funcionalidades completas de CRUD.",
      githubUrl: "https://github.com/Re-Santos/labecommerce-api",
      deployUrl: "https://documenter.getpostman.com/view/28316428/2s9YJhvepq",
      technologies: ["Node.js - Express - PostgreSQL"]
    }, 
    {
      title: "Cadastro Escolar",
      description: "Uma aplicação React para gerenciar cadastros escolares.",
      githubUrl: "https://github.com/Re-Santos/cadastro-escolar",
      deployUrl: "https://cadastroescolar-renatasan.surge.sh/",
      technologies: ["React - CSS - HTML"]
    },
    {
      title: "E-commerce Frontend",
      description: "Projeto de e-commerce desenvolvido com React e Styled-Components.",
      githubUrl: "https://github.com/Re-Santos/projeto-frontendreact",
      deployUrl: "https://frontendreact-renata-easley.surge.sh/",
      technologies: ["React - Styled-Components - CSS"]
    },
    {
      title: "Bellini Calçados",
      description: "Cartão de visitas virtual com interface otimizada para facilitar a experiência de compra do usuário.",
      githubUrl: "https://github.com/Re-Santos/cartao-interativo-bellini",
      deployUrl: "https://re-santos.github.io/cartao-interativo-bellini/",
      technologies: ["HTML - CSS - JavaScript"]
    },
    {
      title: "Cine Ingressos",
      description: "Site que simula a compra de ingressos de cinema com opções de visualização de trailer e informações adicionais.",
      githubUrl: "https://github.com/Re-Santos/cine-ingressos",
      deployUrl: "https://re-santos.github.io./cine-ingressos/",
      technologies: ["HTML - CSS"]
    }
  ];

  return (
    <section id="projects" className="bg-pink-200 p-8">
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
