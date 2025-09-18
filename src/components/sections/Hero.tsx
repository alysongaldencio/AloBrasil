import React from 'react';
import { Button } from '@/components';

const Hero = () => {
  return (
    <section className="text-white" style={{background: 'linear-gradient(to right, #041437, #041437)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Conteúdo de texto acima da imagem */}
        <div className="text-center mb-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Bem-vindo ao AloBrasil
          </h1>
              <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto mt-4">
                ASSISTÊNCIA 24 HORAS E MONITORAMENTO
              </p>
        </div>
        
        {/* Imagem preenchendo toda a largura */}
        <div className="w-full">
          <div className="relative">
            {/* Imagem stand_page1.png */}
                <img
                  src="/src/assets/images/stand_page1.png"
                  alt="Alô Brasil - Assistência 24 horas e Monitoramento"
                  className="w-[90%] mx-auto object-fill rounded-2xl border-4 border-gold-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onError={(e) => {
                // Fallback se a imagem não carregar
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback caso a imagem não carregue */}
            <div className="w-full h-[800px] rounded-2xl border-4 border-gold-400 shadow-2xl flex items-center justify-center hidden" style={{backgroundColor: '#041437'}}>
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
            <div className="absolute top-4 left-4 w-4 h-4 bg-gold-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
