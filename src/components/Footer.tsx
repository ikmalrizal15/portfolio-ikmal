import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-light/50 py-8 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-6 md:mb-0">
            © 2025 Ikmal Rizal.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:ikmalrizal153@gmail.com"
              className="text-gray-400 hover:text-neon-blue transition-colors" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://wa.me/60147205331"
              className="text-gray-400 hover:text-neon-green transition-colors" 
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ikmal-rizal-7698ab2a3"
              className="text-gray-400 hover:text-neon-blue transition-colors" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/ikmalrizal15"
              className="text-gray-400 hover:text-neon-purple transition-colors" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
