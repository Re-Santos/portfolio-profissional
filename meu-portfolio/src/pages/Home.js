import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição do Projeto 1.",
      imageUrl: "/path_to_image"
    },

  ];

  return (
    <main className="p-4">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center my-8 animate-pulse">Bem-vindo ao Meu Portfólio</h1>
        <p className="text-gray-600 text-lg">Explore meu trabalho e projetos que ilustram minha experiência e dedicação no campo do desenvolvimento web.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center my-6">Projetos Destacados</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
