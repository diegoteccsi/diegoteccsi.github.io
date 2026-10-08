import React from 'react';
import { certificaciones } from '../data/certificaciones';
import { Award, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const Certificaciones: React.FC = () => {
  return (
    <section id="certificaciones" className="py-24 sm:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E5E7EB]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            06 · VALIDACIÓN PROFESIONAL
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            CERTIFICACIONES
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#62666D] max-w-md">
          Muro de credenciales y certificaciones oficiales emitidas por las principales organizaciones tecnológicas.
        </p>
      </div>

      {/* Wall of Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificaciones.map((cert) => (
          <div
            key={cert.id}
            className="group relative p-6 bg-white border border-[#E5E7EB] rounded-2xl transition-all duration-200 hover:border-[#2563EB] hover:-translate-y-1 hover:rotate-0.5 shadow-2xs hover:shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Issuer & Year */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900 tracking-wider uppercase font-mono">
                    {cert.emisor}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 font-semibold tabular-nums">
                  {cert.ano}
                </span>
              </div>

              {/* Certification Name */}
              <h3 className="text-base font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors leading-snug mb-2">
                {cert.nombre}
              </h3>

              {/* Category & Credential Code */}
              <div className="text-xs text-slate-500 mb-4 space-y-1">
                <div>{cert.categoria}</div>
                <div className="font-mono text-[11px] text-slate-400">
                  {cert.codigoCredencial}
                </div>
              </div>
            </div>

            {/* Bottom Link CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={cert.enlaceVerificacion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] group-hover:underline transition-colors"
                aria-label={`Ver credencial oficial de ${cert.nombre}`}
              >
                <span>VER CREDENCIAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-semibold">
                OFICIAL
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
