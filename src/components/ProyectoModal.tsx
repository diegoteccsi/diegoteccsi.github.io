import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProyectoItem } from '../types';
import { ProyectoVisual } from './ProyectoVisual';

interface ProyectoModalProps {
  proyecto: ProyectoItem | null;
  onClose: () => void;
}

export const ProyectoModal: React.FC<ProyectoModalProps> = ({ proyecto, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (proyecto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [proyecto, onClose]);

  if (!proyecto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 md:p-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Cerrar detalle del proyecto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Meta Header -> Space Mono */}
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-tech">
          <span className="font-bold text-blue-600">{proyecto.numero}</span>
          <span aria-hidden="true">·</span>
          <span className="font-bold uppercase tracking-wider">{proyecto.categoria}</span>
          <span aria-hidden="true">·</span>
          <span>CASO DE ESTUDIO</span>
        </div>

        {/* Main Title -> Plus Jakarta Sans 800 */}
        <h2 id="modal-titulo" className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-900 mb-4">
          {proyecto.titulo}
        </h2>

        {/* Visual Cover */}
        <div className="my-6">
          <ProyectoVisual tipo={proyecto.tipoVisual} titulo={proyecto.titulo} />
        </div>

        {/* Summary -> Inter 400 */}
        <p className="text-base font-body text-slate-600 leading-relaxed mb-8">
          {proyecto.descripcionCompleta}
        </p>

        {/* Detailed Sections: Desafío, Solución, Impacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-slate-100 mb-8">
          <div className="space-y-2">
            <h3 className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">Desafío</h3>
            <p className="text-sm font-body text-slate-700 leading-normal">{proyecto.desafio}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">Solución Técnica</h3>
            <p className="text-sm font-body text-slate-700 leading-normal">{proyecto.solucion}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">Impacto & Valor</h3>
            <p className="text-sm font-body text-slate-700 leading-normal">{proyecto.impacto}</p>
          </div>
        </div>

        {/* Technologies used -> Space Mono */}
        <div className="mb-8">
          <h3 className="text-xs font-display font-bold uppercase tracking-wider text-slate-400 mb-3">
            Ecosistema Tecnológico
          </h3>
          <div className="flex flex-wrap gap-2">
            {proyecto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-tech text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons -> Inter */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 font-body">
          <div className="flex items-center gap-3">
            {proyecto.enlaceRepositorio && (
              <a
                href={proyecto.enlaceRepositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Ver Código en GitHub</span>
              </a>
            )}
            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-xs"
            >
              <span>Consultar sobre este Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium py-2 px-3"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
