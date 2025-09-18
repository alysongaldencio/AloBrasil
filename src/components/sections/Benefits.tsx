import React from 'react';
import { BENEFITS } from '@/constants';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 pt-32" style={{backgroundColor: '#041437'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefícios
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubra os benefícios de fazer parte da nossa comunidade
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {BENEFITS.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold" style={{color: '#041437'}}>✓</span>
                  </div>
                </div>
                <p className="ml-4 text-lg text-white font-medium">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
