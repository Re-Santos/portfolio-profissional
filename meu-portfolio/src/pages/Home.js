import React, { useEffect } from 'react';
import avatar from '../assets/avatar.jpg'; 

const words = ["Desenvolvedora Front-end", "Desenvolvedora Web"];
let i = 0;
let timer;

function typeWriter(element) {
  let txt = words[i].split("");
  let loopTyping = function() {
    if (txt.length > 0) {
      element.innerHTML += txt.shift();
    } else {
      setTimeout(() => deleteText(element), 1000);
      return false;
    }
    timer = setTimeout(loopTyping, 150);
  };
  loopTyping();
}

function deleteText(element) {
  let txt = element.innerHTML;
  let loopDeleting = function() {
    if (txt.length > 0) {
      txt = txt.split("");
      txt.pop();
      txt = txt.join("");
      element.innerHTML = txt;
      timer = setTimeout(loopDeleting, 50);
    } else {
      i = (i + 1) % words.length;
      typeWriter(element);
      return false;
    }
  };
  loopDeleting();
}

const Home = () => {
  useEffect(() => {
    const element = document.querySelector('.typing');
    if (element) {
      typeWriter(element);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="flex h-screen relative">
      <div className="w-1/2 flex flex-col justify-center items-center bg-blue-500 text-center p-4">
        <h1 className="text-4xl font-bold text-white">Bem-vindo(a)<br/>ao Meu Portfólio</h1>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-purple-500 text-center p-4">
        <h2 className="text-4xl font-bold">Eu sou<br /><span className="typing"></span></h2>
      </div>
      <img src={avatar} alt="Avatar" style={{
        position: 'absolute',
        left: '50%',
        top: '30%',
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
