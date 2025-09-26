import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="text-white" style={{backgroundColor: '#041437'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AloBrasil</h3>
            <p className="text-gray-400">
              Temos a maior base de prestadores do Brasil, isso nos permite ser os mais rápidos em atendimento para o seu associado/cliente.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-navy-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Nosso canal 24h</p>
                    <p className="text-white font-medium">0800 591 8623</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-navy-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Nosso instagram:</p>
                    <a 
                      href="https://www.instagram.com/alobrasilassistencia/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-gold-400 transition-colors"
                    >
                      @alobrasilassistencia
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AloBrasil. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            ALO BRASIL ATIVIDADES DE MONITORAMENTO LTDA - CNPJ: 47.944.387/0001-06
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
