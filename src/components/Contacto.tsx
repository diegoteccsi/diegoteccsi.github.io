import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowRight, Send, MapPin } from 'lucide-react';
import { perfil } from '../data/perfil';
import { FondoInteractivo } from './FondoInteractivo';

export const Contacto: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(perfil.contacto.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.mensaje) return;
    setMensajeEnviado(true);
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
            <span>07 · CANALES DE COMUNICACIÓN</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111111] leading-tight">
            CONECTEMOS
          </h2>

          <p className="text-base sm:text-xl text-[#62666D] leading-relaxed max-w-2xl mx-auto text-balance">
            ¿Tienes un desafío analítico, una iniciativa de ingeniería de datos o una oportunidad profesional en mente? Conversemos.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details Left, Message Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Quick Copy */}
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>Correo Electrónico</span>
              </div>
              <div className="text-lg font-mono font-semibold text-[#111111] break-all">
                {perfil.contacto.email}
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${perfil.contacto.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-semibold hover:bg-[#2563EB] transition-colors"
                >
                  <span>CONTACTAR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copiado al portapapeles</span>
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
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-2xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Perfiles Profesionales
              </div>

              <div className="space-y-3">
                <a
                  href={perfil.contacto.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#111111]">LinkedIn</div>
                      <div className="text-xs text-slate-500">Conexión profesional & trayectoria</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={perfil.contacto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#111111]">GitHub</div>
                      <div className="text-xs text-slate-500">Repositorios, pipelines & código</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{perfil.contacto.disponibilidad}</span>
            </div>
          </div>

          {/* Right Column: Direct Message Box */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                Enviar un Mensaje Directo
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Completa tus datos para coordinar una reunión técnica o conversar sobre un proyecto.
              </p>

              {mensajeEnviado ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-emerald-900">
                    ¡Mensaje registrado con éxito!
                  </h3>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Gracias por ponerte en contacto. Te responderé al correo indicado a la brevedad posible.
                  </p>
                  <button
                    onClick={() => {
                      setMensajeEnviado(false);
                      setFormData({ nombre: '', email: '', mensaje: '' });
                    }}
                    className="text-xs font-bold text-emerald-800 underline mt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contacto-nombre" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nombre o Empresa
                    </label>
                    <input
                      id="contacto-nombre"
                      type="text"
                      required
                      placeholder="Tu nombre o empresa"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      id="contacto-email"
                      type="email"
                      required
                      placeholder="tu.correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto-mensaje" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mensaje o Detalle del Requerimiento
                    </label>
                    <textarea
                      id="contacto-mensaje"
                      rows={4}
                      required
                      placeholder="Describe brevemente tus necesidades analíticas, arquitectura o propuesta..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    <span>ENVIAR MENSAJE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
