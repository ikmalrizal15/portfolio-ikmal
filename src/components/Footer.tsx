
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-light/50 py-8 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-6 md:mb-0">
            © 2025 Ikmal Rizal. Built with ❤️ using React & Tailwind.
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
            >
              <Phone size={20} />
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-neon-blue transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-neon-purple transition-colors" 
              aria-label="GitHub"
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
