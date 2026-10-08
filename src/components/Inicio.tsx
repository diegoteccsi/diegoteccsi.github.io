import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
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
        {/* 1. Nombre — elemento principal (72–80px, peso 700–800, Space Mono, sin text-transform) */}
        <h1 className="font-tech font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[80px] tracking-tight text-[#111111] mb-5 sm:mb-6 leading-[1.06] select-none text-balance">
          {perfil.nombre}
        </h1>

        {/* 2. Rol — elemento secundario */}
        <div className="mb-6 sm:mb-8">
          <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-tight bg-gradient-to-r from-[#34D399] to-[#8B5CF6] bg-clip-text text-transparent inline-block select-none leading-tight">
            {perfil.rolPrincipal}
          </p>
        </div>

        {/* 3. Frase — elemento de apoyo */}
        <p className="font-display font-medium text-lg sm:text-xl md:text-[23px] lg:text-[25px] text-[#8B8787] leading-relaxed max-w-3xl mb-10 sm:mb-12 text-balance">
          {perfil.resumenHero}
        </p>

        {/* Action Button -> Inter 600 */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          <a
            href="#proyectos"
            data-cursor="arrow"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#111111] text-white font-body font-semibold text-sm hover:bg-[#2563EB] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Explora mi trabajo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Down Scroll Indicator */}
        <a
          href="#sobre-mi"
          className="mt-14 text-[#62666D] hover:text-[#2563EB] transition-colors p-2 rounded-full"
          aria-label="Desplazarse hacia la sección Sobre mí"
        >
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70" />
        </a>
      </div>
    </section>
  );
};
