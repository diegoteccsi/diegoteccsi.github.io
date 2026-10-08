import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { perfil } from '../data/perfil';

export const SobreMi: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E5E7EB]">
      {/* 2-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Section Title & Key Highlights */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="text-xs font-tech font-bold tracking-widest text-[#2563EB] uppercase mb-3">
              01 · PERFIL PROFESIONAL
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              SOBRE MÍ
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">
              Pilares de Trabajo
            </div>
            <ul className="space-y-3 text-sm font-body text-[#111111]">
              {perfil.sobreMi.enfoque.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Metric Callouts -> Space Mono 700 */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {perfil.sobreMi.metricasClave.map((m, idx) => (
              <div key={idx} className="border-l-2 border-[#2563EB] pl-3 py-1">
                <div className="text-xl sm:text-2xl font-tech font-bold text-[#111111] tabular-nums">
                  {m.valor}
                </div>
                <div className="text-[11px] font-body font-medium text-[#62666D] leading-tight mt-0.5">
                  {m.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Paragraphs & Structured Context */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-5 text-base sm:text-lg font-body text-[#62666D] leading-relaxed">
            {perfil.sobreMi.parrafos.map((parrafo, idx) => (
              <p key={idx} className="text-[#62666D]">
                {parrafo}
              </p>
            ))}
          </div>

          {/* Analytical Philosophy Cards (Light, non-slop, clean hairline borders) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="p-5 bg-white border border-[#E5E7EB] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-[#2563EB]">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-display font-bold uppercase tracking-wider text-[#111111]">
                  Visión Multidisciplinaria
                </span>
              </div>
              <p className="text-xs font-body text-[#62666D] leading-relaxed">
                Articulación entre la ingeniería de pipelines, el rigor estadístico de la ciencia de datos y la interpretabilidad del análisis de negocios.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E5E7EB] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-[#2563EB]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-display font-bold uppercase tracking-wider text-[#111111]">
                  Gobernanza & Calidad
                </span>
              </div>
              <p className="text-xs font-body text-[#62666D] leading-relaxed">
                Datos reproducibles, trazabilidad de esquemas, linaje claro y validaciones automatizadas para garantizar información en la que se puede confiar.
              </p>
            </div>
          </div>

          {/* Quick Contact Link -> Inter 600 */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href="#habilidades"
              className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[#2563EB] hover:text-blue-800 tracking-wider uppercase group"
            >
              <span>EXPLORAR HABILIDADES TÉCNICAS</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
