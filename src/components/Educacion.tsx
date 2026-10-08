import React from 'react';
import { educacion } from '../data/educacion';
import { GraduationCap, Award } from 'lucide-react';

export const Educacion: React.FC = () => {
  return (
    <section id="educacion" className="py-24 sm:py-32 px-6 md:px-10 max-w-5xl mx-auto border-t border-[#E5E7EB]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            05 · FORMACIÓN ACADÉMICA
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            EDUCACIÓN
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#62666D] max-w-md">
          Bases metodológicas y de ingeniería orientadas a la investigación aplicada y la analítica cuantitativa.
        </p>
      </div>

      {/* Editorial Clean Blocks with Generous Whitespace */}
      <div className="space-y-12">
        {educacion.map((item) => (
          <div
            key={item.id}
            className="group relative p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-2xl hover:border-[#2563EB]/40 transition-all duration-200 shadow-2xs hover:shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="space-y-1">
                <div className="text-xs font-mono font-semibold text-[#2563EB] tabular-nums">
                  {item.periodo}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">
                  {item.titulo}
                </h3>
                <div className="text-sm font-semibold text-slate-700 flex items-center gap-2 pt-1">
                  <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                  <span>{item.institucion}</span>
                </div>
              </div>

              {item.mencion && (
                <div className="self-start px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-mono text-slate-700">
                  {item.mencion}
                </div>
              )}
            </div>

            <p className="text-sm text-[#62666D] leading-relaxed max-w-3xl">
              {item.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
