import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="text-white" style={{backgroundColor: '#041437'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AloBrasil</h3>
            <p className="text-gray-400">
              Conectando brasileiros ao redor do mundo através de uma comunidade ativa e acolhedora.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white">Nossos Diferenciais</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Eventos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Fórum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">{CONTACT_INFO.email}</li>
              <li className="text-gray-400">{CONTACT_INFO.phone}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AloBrasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
