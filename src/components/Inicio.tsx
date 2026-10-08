import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
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
          <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-tight bg-gradient-to-r from-[#39BCF8] to-[#8B5CF6] bg-clip-text text-transparent inline-block select-none leading-tight">
            {perfil.rolPrincipal}
          </p>
        </div>

        {/* 3. Frase — elemento de apoyo */}
        <p className="font-display font-medium text-lg sm:text-xl md:text-[23px] lg:text-[25px] text-[#8B8787] leading-relaxed max-w-3xl mb-10 sm:mb-12 text-balance">
          {perfil.resumenHero}
        </p>

        {/* Action Button & Secondary Social Links */}
        <div className="flex flex-col items-center justify-center">
          <a
            href="#proyectos"
            data-cursor="arrow"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#111111] text-white font-body font-semibold text-sm shadow-sm hover:bg-[#2563EB] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Ver Proyectos</span>
          </a>

          {/* Social Icons (GitHub & LinkedIn) */}
          <div className="flex items-center justify-center gap-3.5 mt-8 sm:mt-9">
            <a
              href="https://github.com/diegoteccsi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-[#E5E7EB] bg-white text-[#111111] hover:text-[#2563EB] hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-teccsi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-[#E5E7EB] bg-white text-[#111111] hover:text-[#2563EB] hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Down Scroll Indicator */}
        <a
          href="#sobre-mi"
          className="mt-10 sm:mt-12 text-[#62666D] hover:text-[#2563EB] transition-colors p-2 rounded-full"
          aria-label="Desplazarse hacia la sección Sobre mí"
        >
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70" />
        </a>
      </div>
    </section>
  );
};
