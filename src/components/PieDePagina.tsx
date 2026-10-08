import React from 'react';
import { perfil } from '../data/perfil';

export const PieDePagina: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 md:px-10 border-t border-[#E5E7EB] bg-[#F7F8FA] text-xs font-body text-[#62666D]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Name & Copyright -> Space Mono for Name, Inter for body */}
        <div className="space-y-1">
          <div className="font-tech font-bold text-sm text-[#111111]">
            {perfil.nombre}
          </div>
          <div>
            © {currentYear} · Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};
