import React, { useEffect, useState } from 'react';
import avatar from '../assets/avatar5.jpg';

const words = ["Desenvolvedora Front-end"];

const Home = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      setCurrentWord(words[0]);
      return;
    }

    let timer;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setCurrentWord(isDeleting ? fullText.substring(0, currentWord.length - 1) : fullText.substring(0, currentWord.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentWord === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed, isMobile]);

  return (
    <section id="home" className="flex h-screen relative">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-blue-500 text-center p-4" style={{ paddingTop: '18%' }}>
        <h1 className="text-4xl font-bold text-white">Bem-vindo(a)<br />ao Meu Portfólio <span className="wave-hand">👋🏾</span></h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-purple-500 text-center p-4" style={{ paddingTop: '18%' }}>
        <h1 className="text-4xl font-bold">
          Eu sou<br />
          <span className={isMobile ? '' : 'typing'}>{isMobile ? 'Desenvolvedora Front-end' : currentWord}</span>
        </h1>
      </div>
      <img src={avatar} alt="Avatar" style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
      }} />
    </section>
  );
};

export default Home;
