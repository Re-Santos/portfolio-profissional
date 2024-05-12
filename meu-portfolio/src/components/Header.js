import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className={`fixed top-0 w-full z-10 ${navbar ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-transparent'} shadow-md transition duration-300 ease-in-out`}>
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="font-bold text-xl" style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'transform 0.3s ease' }}>
          Renata Santos
        </div>
        <div className="hidden md:flex">
          <ul className="flex">
            <li className="mx-4"><Link to="home" smooth={true} duration={500} className="text-xl hover:text-blue-700" style={{ cursor: 'pointer' }}>Home</Link></li>
            <li className="mx-4"><Link to="about" smooth={true} duration={500} className="text-xl hover:text-blue-700" style={{ cursor: 'pointer' }}>Sobre Mim</Link></li>
            <li className="mx-4"><Link to="skills" smooth={true} duration={500} className="text-xl hover:text-blue-700" style={{ cursor: 'pointer' }}>Habilidades</Link></li>
            <li className="mx-4"><Link to="projects" smooth={true} duration={500} className="text-xl hover:text-blue-700" style={{ cursor: 'pointer' }}>Projetos</Link></li>
            <li className="mx-4"><Link to="contact" smooth={true} duration={500} className="text-xl hover:text-blue-700" style={{ cursor: 'pointer' }}>Contato</Link></li>
          </ul>
        </div>
        <button className="md:hidden text-3xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden">
            <ul className="flex flex-col items-center py-4">
              <li className="my-2"><Link to="home" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li className="my-2"><Link to="about" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>Sobre Mim</Link></li>
              <li className="my-2"><Link to="skills" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>Habilidades</Link></li>
              <li className="my-2"><Link to="projects" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>Projetos</Link></li>
              <li className="my-2"><Link to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>Contato</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
