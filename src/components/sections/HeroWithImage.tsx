import React from 'react';
import { Button } from '@/components';

const HeroWithImage = () => {
  return (
    <section className="bg-gradient-to-r from-navy-950 to-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bem-vindo ao AloBrasil
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto lg:mx-0">
              Sua plataforma completa para conectar brasileiros ao redor do mundo
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-gold-400 text-navy-950 hover:bg-gold-300 font-bold text-lg px-8 py-4"
            >
              ⭐ Começar Agora ⭐
            </Button>
          </div>
          
          {/* Área da imagem */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* OPÇÃO 1: Imagem local */}
              <img 
                src="/src/assets/images/hero-image.jpg" 
                alt="Comunidade brasileira conectada"
                className="w-96 h-96 object-cover rounded-2xl border-4 border-gold-400 shadow-2xl"
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback caso a imagem não carregue */}
              <div className="w-96 h-96 bg-navy-800 rounded-2xl border-4 border-gold-400 shadow-2xl flex items-center justify-center hidden">
                <div className="text-center">
                  <div className="text-8xl mb-4">🇧🇷</div>
                  <p className="text-gold-400 font-semibold text-lg">
                    Imagem não encontrada
                  </p>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-300 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithImage;
