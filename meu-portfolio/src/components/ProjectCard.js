import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded shadow-lg p-4 m-2 transition duration-300 hover:shadow-xl hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
