
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center" style={{backgroundColor: '#041437'}}>
      <div className="text-center">
        <div className="text-8xl mb-4 text-gold-400">🚢</div>
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="mb-4 text-xl text-gray-300">Oops! Página não encontrada</p>
        <a href="/" className="text-gold-400 underline hover:text-gold-300 font-semibold text-lg">
          ⭐ Voltar ao Início ⭐
        </a>
      </div>
    </div>
  );
};

export default NotFound;
