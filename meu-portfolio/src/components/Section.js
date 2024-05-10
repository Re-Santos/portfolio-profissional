import React from 'react';

// Este componente aceita children (conteúdo da seção), uma classe de cor de fundo e qualquer outra classe CSS que você queira passar
const Section = ({ children, bgClassName, extraClasses = '' }) => {
  return (
    <div className={`${bgClassName} py-20 shadow-xl ${extraClasses}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default Section;
