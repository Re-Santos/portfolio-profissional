import React from 'react';
import avatar from '../assets/foto-perfil.jpg';  

const About = () => {
  return (
    <section id="about" className="bg-pink-200 text-blue p-8 text-center">
      <div className="flex flex-col items-center justify-center">
        <img src={avatar} alt="Renata Santos" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
        <h2 className="text-3xl font-bold mt-4">Sobre Mim</h2>
        <p className="mt-4">
          Sou <strong>Renata Santos</strong>, uma desenvolvedora Front-End apaixonada pela intersecção entre design e tecnologia. Formada em Administração com habilitação em Marketing e pós-graduada em Coaching e Carreira, minha jornada profissional inclui experiências desde o empreendedorismo até o desenvolvimento de soluções web inovadoras.
        </p>
        <p className="mt-2">
          Atualmente, estou focada no desenvolvimento de um e-commerce robusto, aprimorando constantemente minhas habilidades em tecnologias como HTML, CSS, JavaScript, React, e mais.
        </p>
      </div>
    </section>
  );
};

export default About;
