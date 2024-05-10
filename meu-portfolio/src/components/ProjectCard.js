import React from 'react';

const ProjectCard = ({ title, description, githubUrl, deployUrl, technologies }) => {
  return (
    <div className="project-card m-4 p-4 bg-white rounded shadow transition duration-300 hover:shadow-lg hover:scale-105" style={{ width: '300px', height: 'auto' }}>
      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded">
        <h3 className="text-lg font-bold text-white text-center">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm">{description}</p>
        <p className="text-xs p-6 font-bold text-black-500">{technologies.join(', ')}</p>
        <div className="mt-2 flex justify-between">
          <a href={githubUrl} className="text-blue-500 hover:text-blue-600 transition duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={deployUrl} className="text-green-500 hover:text-green-600 transition duration-300" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
