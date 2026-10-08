import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BotonVolverArriba: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muestra el botón cuando el usuario se desplaza más de 250px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#39BCF8] to-[#8B5CF6] text-white shadow-md shadow-purple-500/15 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:opacity-95 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 stroke-[2.2]" />
    </button>
  );
};
