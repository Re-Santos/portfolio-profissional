import React from 'react';

const ProjectCard = ({ title, description, imageUrl, githubUrl, deployUrl }) => {
  return (
    <div className="m-4 p-4 bg-white rounded shadow transition duration-300 hover:shadow-lg hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p>{description}</p>
      <a href={githubUrl} className="text-blue-500 hover:text-blue-700 transition duration-300">GitHub</a>
      <br/>
      <a href={deployUrl} className="text-blue-500 hover:text-blue-700 transition duration-300">Ver Projeto</a>
    </div>
  );
};

export default ProjectCard;
