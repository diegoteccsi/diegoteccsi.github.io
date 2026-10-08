import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowRight } from 'lucide-react';
import { perfil } from '../data/perfil';
import { FondoInteractivo } from './FondoInteractivo';

export const Contacto: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(perfil.contacto.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contacto"
      className="relative py-28 sm:py-36 px-6 md:px-10 overflow-hidden border-t border-[#E5E7EB]"
    >
      {/* Interactive Background Continuity */}
      <FondoInteractivo intensidad={0.5} className="opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Large Visual Closing Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-tech font-bold uppercase tracking-wider">
            <span>07 · CANALES DE COMUNICACIÓN</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#111111] leading-tight">
            CONECTEMOS
          </h2>

          <p className="text-base sm:text-xl font-body text-[#62666D] leading-relaxed max-w-2xl mx-auto text-balance">
            ¿Tienes un desafío analítico, una iniciativa de ingeniería de datos o una oportunidad profesional en mente? Conversemos.
          </p>
        </div>

        {/* Focused Layout: Correo Electrónico & Perfiles Profesionales */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Email Card with Quick Copy */}
            <div className="p-7 bg-white border border-[#E5E7EB] rounded-2xl shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-slate-400">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span>Correo Electrónico</span>
                </div>
                <a
                  href={`mailto:${perfil.contacto.email}`}
                  className="block text-base sm:text-lg font-body font-medium sm:font-semibold text-[#111111] hover:text-[#2563EB] transition-colors break-all"
                >
                  {perfil.contacto.email}
                </a>
                <p className="text-xs font-body text-slate-500 leading-relaxed">
                  Canal directo para consultas técnicas, colaboraciones y propuestas de proyectos.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2.5 font-body">
                <a
                  href={`mailto:${perfil.contacto.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#111111] text-white text-xs font-semibold hover:bg-[#2563EB] transition-colors"
                >
                  <span>CONTACTAR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="p-7 bg-white border border-[#E5E7EB] rounded-2xl shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">
                  Perfiles Profesionales
                </div>

                <div className="space-y-3">
                  <a
                    href={perfil.contacto.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="text-sm font-display font-bold text-[#111111]">LinkedIn</div>
                        <div className="text-xs font-body text-slate-500">Conexión profesional & trayectoria</div>
                      </div>
                    </div>
                    <span className="text-xs font-tech font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                  <a
                    href={perfil.contacto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="text-sm font-display font-bold text-[#111111]">GitHub</div>
                        <div className="text-xs font-body text-slate-500">Repositorios, pipelines & código</div>
                      </div>
                    </div>
                    <span className="text-xs font-tech font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Note */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-body text-slate-600 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{perfil.contacto.disponibilidad}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
