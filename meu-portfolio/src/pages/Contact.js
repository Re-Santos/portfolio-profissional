import React from 'react';
import whatsappLogo from '../assets/whats-logo.png'; 
import linkedinLogo from '../assets/linkedin.png'; 
import emailLogo from '../assets/email.png';

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-500 p-8 text-center">
      <h2 className="text-3xl font-bold">Contato</h2>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <a href="https://wa.me/5531993237951" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <img src={whatsappLogo} alt="WhatsApp" style={{ width: '60px', height: '60px' }} />
        </a>
        <a href="https://www.linkedin.com/in/s-renata-santos/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: '60px', height: '60px' }} />
        </a>
        <a href="mailto:renatasantos.dev@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <img src={emailLogo} alt="Email" style={{ width: '60px', height: '60px' }} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
