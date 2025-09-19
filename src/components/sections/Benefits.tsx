const Benefits = () => {
  return (
    <section id="benefits" className="py-20" style={{backgroundColor: '#041437'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gold-400 text-lg">
            O que nos torna únicos no mercado
          </p>
        </div>

        {/* Imagem preenchendo toda a largura */}
        <div className="w-full">
          <div className="relative">
            {/* Imagem diferenciais.jpg */}
            <img
              src="/images/diferenciais.jpg"
              alt="Alô Brasil - Nossos Diferenciais"
              className="w-[90%] mx-auto object-fill rounded-2xl border-4 border-gold-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onError={(e) => {
                // Fallback se a imagem não carregar
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            
            {/* Fallback caso a imagem não carregue */}
            <div className="w-full h-[800px] rounded-2xl border-4 border-gold-400 shadow-2xl flex items-center justify-center hidden" style={{backgroundColor: '#041437'}}>
              <div className="text-center">
                <div className="text-8xl mb-4">⭐</div>
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

export default Benefits;
