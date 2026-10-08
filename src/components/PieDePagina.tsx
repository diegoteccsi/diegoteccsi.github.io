import React from 'react';
import { perfil } from '../data/perfil';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const PieDePagina: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-10 border-t border-[#E5E7EB] bg-[#F7F8FA] text-xs text-[#62666D]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Name & Copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-sm text-[#111111]">
            {perfil.nombre}
          </div>
          <div>
            © {currentYear} · Todos los derechos reservados · Portafolio Profesional de Datos
          </div>
          <div className="text-[11px] text-slate-400">
            Diseñado con estándares de ingeniería de datos y desarrollo web interactivo.
          </div>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-6">
          <a
            href={perfil.contacto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors p-1"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={perfil.contacto.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${perfil.contacto.email}`}
            className="hover:text-[#111111] transition-colors p-1"
            aria-label="Correo"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
