import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App fade-in-up">
      <Header />
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
