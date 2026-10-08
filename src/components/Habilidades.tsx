import React, { useState } from 'react';
import { categoriasHabilidades, habilidades } from '../data/habilidades';
import { CategoriaHabilidad, HabilidadItem } from '../types';
import { Database, Code2, Cloud, Sparkles, Workflow, Compass, Check, Info } from 'lucide-react';

export const Habilidades: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaHabilidad | 'Todas'>('Todas');
  const [habilidadSeleccionada, setHabilidadSeleccionada] = useState<HabilidadItem | null>(null);

  const habilidadesFiltradas = categoriaActiva === 'Todas'
    ? habilidades
    : habilidades.filter((h) => h.categoria === categoriaActiva);

  const getIconoCategoria = (cat: CategoriaHabilidad) => {
    switch (cat) {
      case 'Análisis de Datos':
        return <Database className="w-4 h-4 text-[#2563EB]" />;
      case 'Programación':
        return <Code2 className="w-4 h-4 text-[#2563EB]" />;
      case 'Ingeniería de Datos':
        return <Workflow className="w-4 h-4 text-[#2563EB]" />;
      case 'Nube':
        return <Cloud className="w-4 h-4 text-[#2563EB]" />;
      case 'Ciencia de Datos':
        return <Sparkles className="w-4 h-4 text-[#2563EB]" />;
      case 'Automatización y Low-Code':
        return <Workflow className="w-4 h-4 text-[#2563EB]" />;
      case 'Metodologías':
        return <Compass className="w-4 h-4 text-[#2563EB]" />;
      default:
        return <Database className="w-4 h-4 text-[#2563EB]" />;
    }
  };

  return (
    <section id="habilidades" className="py-24 sm:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E5E7EB]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-tech font-bold tracking-widest text-[#2563EB] uppercase mb-3">
            02 · ECOSISTEMA TÉCNICO
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
            HABILIDADES
          </h2>
        </div>
        <p className="text-sm sm:text-base font-body text-[#62666D] max-w-md">
          Ecosistema integral estructurado por dominios de especialidad analítica, sin porcentajes arbitrarios.
        </p>
      </div>

      {/* Interactive Category Segmented Control Tabs -> Inter */}
      <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[#E5E7EB] rounded-xl overflow-x-auto scrollbar-none mb-10 max-w-full font-body">
        <button
          onClick={() => setCategoriaActiva('Todas')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
            categoriaActiva === 'Todas'
              ? 'bg-[#111111] text-white shadow-xs'
              : 'text-[#62666D] hover:text-[#111111] hover:bg-slate-50'
          }`}
        >
          Todas ({habilidades.length})
        </button>
        {categoriasHabilidades.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              categoriaActiva === cat
                ? 'bg-[#111111] text-white shadow-xs'
                : 'text-[#62666D] hover:text-[#111111] hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid: Interactive Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {habilidadesFiltradas.map((item) => {
          const isSelected = habilidadSeleccionada?.nombre === item.nombre;
          return (
            <div
              key={item.nombre}
              onClick={() => setHabilidadSeleccionada(isSelected ? null : item)}
              className={`group relative p-5 bg-white rounded-xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20 shadow-sm'
                  : 'border-[#E5E7EB] hover:border-[#2563EB]/60 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    {getIconoCategoria(item.categoria)}
                  </span>
                  <div>
                    {/* Technology Name -> Space Mono 700 */}
                    <h3 className="text-base font-tech font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">
                      {item.nombre}
                    </h3>
                    <div className="text-[11px] font-body text-[#62666D]">
                      {item.categoria}
                    </div>
                  </div>
                </div>

                {item.destacada && (
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md">
                    CORE
                  </span>
                )}
              </div>

              {/* Description -> Inter 400 */}
              <p className="text-xs font-body text-[#62666D] leading-relaxed mb-3">
                {item.descripcion}
              </p>

              {/* Related Tools / Connectors -> Space Mono */}
              {item.herramientasRelacionadas && (
                <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] text-slate-400 font-tech">Conexiones:</span>
                  {item.herramientasRelacionadas.map((rel, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-[11px] font-tech text-slate-600 bg-slate-50 px-1.5 py-0.5 rounded-sm border border-slate-100"
                    >
                      {rel}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Skill Detail Note */}
      {habilidadSeleccionada && (
        <div className="mt-8 p-6 bg-blue-50/60 border border-blue-200 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-display font-bold uppercase tracking-wider text-[#2563EB] mb-1">
                Detalle de Especialidad: {habilidadSeleccionada.nombre}
              </div>
              <p className="text-sm font-body text-slate-700">
                {habilidadSeleccionada.descripcion}
              </p>
            </div>
          </div>
          <button
            onClick={() => setHabilidadSeleccionada(null)}
            className="text-xs font-body font-semibold text-slate-500 hover:text-slate-800 underline shrink-0"
          >
            Cerrar detalle
          </button>
        </div>
      )}
    </section>
  );
};
