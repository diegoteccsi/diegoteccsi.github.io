import React, { useState } from 'react';
import { proyectos } from '../data/proyectos';
import { ProyectoItem } from '../types';
import { ProyectoVisual } from './ProyectoVisual';
import { ProyectoModal } from './ProyectoModal';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

export const Proyectos: React.FC = () => {
  const [proyectoActivo, setProyectoActivo] = useState<ProyectoItem | null>(null);

  return (
    <section id="proyectos" className="py-24 sm:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E5E7EB]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            03 · CASOS DE ESTUDIO
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            PROYECTOS
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#62666D] max-w-md">
          Soluciones de datos estructuradas con enfoque en arquitectura, analítica de decisiones y valor de negocio medible.
        </p>
      </div>

      {/* Alternating Editorial Project Rows */}
      <div className="space-y-24 sm:space-y-32">
        {proyectos.map((proyecto, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <article
              key={proyecto.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group`}
            >
              {/* Visual Column */}
              <div
                className={`lg:col-span-7 cursor-pointer ${
                  isReverse ? 'lg:order-2' : 'lg:order-1'
                }`}
                onClick={() => setProyectoActivo(proyecto)}
                data-cursor="ver"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E5E7EB] transition-all duration-300 group-hover:border-[#2563EB]/50 group-hover:shadow-md">
                  <ProyectoVisual tipo={proyecto.tipoVisual} titulo={proyecto.titulo} />

                  {/* Hover Overlay with VER PROYECTO */}
                  <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-2xs">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs font-bold tracking-wider uppercase shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>VER PROYECTO</span>
                      <span className="text-[#2563EB]">→</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-5 space-y-5 ${
                  isReverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Number & Category */}
                <div className="flex items-center gap-3 text-xs text-[#62666D]">
                  <span className="font-mono text-base font-bold text-[#2563EB] tabular-nums">
                    {proyecto.numero}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">/</span>
                  <span className="font-semibold text-slate-800 uppercase tracking-wider">
                    {proyecto.categoria}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setProyectoActivo(proyecto)}
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] hover:text-[#2563EB] cursor-pointer transition-colors leading-tight"
                >
                  {proyecto.titulo}
                </h3>

                {/* Brief Summary */}
                <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
                  {proyecto.resumen}
                </p>

                {/* Technologies (Clean unboxed tags) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-slate-700 bg-white border border-[#E5E7EB] px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex items-center gap-4">
                  <button
                    onClick={() => setProyectoActivo(proyecto)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#2563EB] hover:text-blue-800 transition-colors py-1 group/btn"
                  >
                    <span>VER PROYECTO</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>

                  {proyecto.enlaceRepositorio && (
                    <a
                      href={proyecto.enlaceRepositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#62666D] hover:text-[#111111] transition-colors py-1"
                      aria-label={`Ver repositorio de ${proyecto.titulo}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repositorio</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Detail Modal */}
      <ProyectoModal
        proyecto={proyectoActivo}
        onClose={() => setProyectoActivo(null)}
      />
    </section>
  );
};
