import React from 'react';
import { ArrowDown, ArrowRight, Database, Terminal, Cpu } from 'lucide-react';
import { perfil } from '../data/perfil';
import { FondoInteractivo } from './FondoInteractivo';

export const Inicio: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 md:px-10"
    >
      {/* Interactive 3D Background */}
      <FondoInteractivo intensidad={1} />

      {/* Content Layer (Higher z-index, uncluttered) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Kicker Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E5E7EB] text-[#2563EB] text-xs font-semibold tracking-wider uppercase mb-8 shadow-2xs backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span>{perfil.subtitulo}</span>
        </div>

        {/* Large Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] text-[#111111] mb-6 leading-[1.06] text-balance uppercase select-none">
          {perfil.nombre}
        </h1>

        {/* Professional Role & Description */}
        <p className="text-lg sm:text-xl font-medium text-[#2563EB] mb-4 max-w-2xl">
          {perfil.rolPrincipal}
        </p>

        <p className="text-base sm:text-lg text-[#62666D] leading-relaxed max-w-2xl mb-10 text-balance">
          {perfil.resumenHero}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#proyectos"
            data-cursor="arrow"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#111111] text-white text-sm font-semibold hover:bg-[#2563EB] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>EXPLORAR MI TRABAJO</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contacto"
            data-cursor="arrow"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#111111] border border-[#E5E7EB] text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>CONTACTAR</span>
            <span className="text-[#2563EB] transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Quick Discipline Indicators (Subtle unboxed editorial line) */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-[#62666D] pt-8 border-t border-slate-200/60 max-w-xl">
          <div className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Pipelines & Modelado</span>
          </div>
          <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Analítica & BI Ejecutivo</span>
          </div>
          <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Machine Learning & Flujos</span>
          </div>
        </div>

        {/* Down Scroll Indicator */}
        <a
          href="#sobre-mi"
          className="mt-12 text-[#62666D] hover:text-[#2563EB] transition-colors p-2 rounded-full"
          aria-label="Desplazarse hacia la sección Sobre mí"
        >
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70" />
        </a>
      </div>
    </section>
  );
};
