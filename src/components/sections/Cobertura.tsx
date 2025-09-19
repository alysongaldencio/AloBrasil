import { useState } from 'react';

const Cobertura = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.error('Erro ao carregar imagem de cobertura');
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Imagem de cobertura carregada com sucesso');
    setImageLoaded(true);
  };

  return (
    <section 
      id="coverage" 
      className="py-20 bg-slate-900" 
      style={{
        backgroundColor: '#041437',
        minHeight: '500px',
        display: 'block',
        visibility: 'visible'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossa Cobertura
          </h2>
          <p className="text-gold-400 text-lg">
            Atendemos em todo o território nacional
          </p>
        </div>

        {/* Imagem preenchendo toda a largura */}
        <div className="w-full">
          <div className="relative">
            {/* Imagem cobertura.jpg */}
            {!imageError ? (
              <img
                src="/images/cobertura.jpg"
                alt="Alô Brasil - Nossa Cobertura"
                className={`w-[90%] mx-auto object-cover rounded-2xl border-4 border-gold-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ minHeight: '400px' }}
              />
            ) : null}
            
            {/* Loading state */}
            {!imageLoaded && !imageError && (
              <div className="w-[90%] h-[400px] mx-auto rounded-2xl border-4 border-gold-400 shadow-2xl flex items-center justify-center" style={{backgroundColor: '#041437'}}>
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-400 mx-auto mb-4"></div>
                  <p className="text-gold-400 font-semibold text-lg">
                    Carregando mapa...
                  </p>
                </div>
              </div>
            )}
            
            {/* Fallback caso a imagem não carregue */}
            {imageError && (
              <div className="w-[90%] h-[400px] mx-auto rounded-2xl border-4 border-gold-400 shadow-2xl flex items-center justify-center" style={{backgroundColor: '#041437'}}>
                <div className="text-center">
                  <div className="text-8xl mb-4">🗺️</div>
                  <p className="text-gold-400 font-semibold text-lg mb-2">
                    Mapa de Cobertura
                  </p>
                  <p className="text-white text-sm">
                    Atendemos em todo o Brasil
                  </p>
                </div>
              </div>
            )}
            
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

export default Cobertura;
