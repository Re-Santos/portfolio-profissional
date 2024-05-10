import React from 'react';

const TitleComponent = ({ text }) => {
  return (
    <h2 className="text-3xl font-bold text-center underline decoration-wavy decoration-blue-500">
      {text}
    </h2>
  );
};

export default TitleComponent;
