import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-10 ${navbar ? 'bg-white' : 'bg-transparent'} shadow-md transition duration-300 ease-in-out`}>
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="font-bold text-xl" style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'transform 0.3s ease' }}>
          Renata Santos
        </div>
        <nav>
          <ul className="flex">
            <li className="mx-4"><Link to="home" smooth={true} duration={500} className="text-xl hover:text-blue-700">Home</Link></li>
            <li className="mx-4"><Link to="about" smooth={true} duration={500} className="text-xl hover:text-blue-700">Sobre Mim</Link></li>
            <li className="mx-4"><Link to="projects" smooth={true} duration={500} className="text-xl hover:text-blue-700">Projetos</Link></li>
            <li className="mx-4"><Link to="contact" smooth={true} duration={500} className="text-xl hover:text-blue-700">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
