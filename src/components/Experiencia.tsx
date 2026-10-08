import React, { useState } from 'react';
import { experiencias } from '../data/experiencia';
import { Briefcase, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

export const Experiencia: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experiencias[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experiencia" className="py-24 sm:py-32 px-6 md:px-10 max-w-5xl mx-auto border-t border-[#E5E7EB]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-tech font-bold tracking-widest text-[#2563EB] uppercase mb-3">
            04 · TRAYECTORIA
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
            EXPERIENCIA
          </h2>
        </div>
        <p className="text-sm sm:text-base font-body text-[#62666D] max-w-md">
          Evolución profesional continua en desarrollo de soluciones de datos, ingeniería analítica y entrega de valor.
        </p>
      </div>

      {/* Minimalist Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 ml-3 sm:ml-6 space-y-12">
        {experiencias.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-3 border-[#2563EB] group-hover:scale-125 transition-transform duration-200 shadow-xs" />

              {/* Content Header */}
              <div className="space-y-2">
                {/* Period Badge & Location -> Space Mono */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-tech font-bold text-[#2563EB] text-sm tabular-nums">
                    {item.periodo}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 font-body text-[#62666D]">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.ubicacion}</span>
                  </span>
                </div>

                {/* Role Title -> Plus Jakarta Sans 700 */}
                <h3 className="text-2xl font-display font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">
                  {item.puesto}
                </h3>

                {/* Company Name -> Plus Jakarta Sans 600 */}
                <div className="text-base font-display font-semibold text-slate-700">
                  {item.empresa}
                </div>

                {/* Description -> Inter 400 */}
                <p className="text-sm sm:text-base font-body text-[#62666D] leading-relaxed pt-1">
                  {item.descripcion}
                </p>

                {/* Toggle Key Deliverables -> Inter 600 */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[#2563EB] hover:text-blue-800 transition-colors pt-2 focus-visible:outline-hidden"
                >
                  <span>{isExpanded ? 'Ocultar entregables clave' : 'Ver entregables & impacto clave'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Expanded Bullet Points -> Inter 400 */}
                {isExpanded && (
                  <div className="pt-3 pb-1 space-y-2 text-xs sm:text-sm font-body text-slate-700 animate-in fade-in duration-200">
                    <div className="text-[11px] font-display font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Principales Contribuciones:
                    </div>
                    {item.logros.map((logro, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                        <span className="leading-relaxed">{logro}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies List -> Space Mono */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {item.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-tech text-slate-600 bg-white border border-[#E5E7EB] px-2 py-0.5 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
