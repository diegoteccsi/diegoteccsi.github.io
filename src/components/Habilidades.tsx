import React, { useState } from 'react';
import { categoriasHabilidades, habilidades } from '../data/habilidades';
import { CategoriaHabilidad } from '../types';
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Code2,
  GitBranch,
  Cloud,
  Layers,
  Brain,
  Zap,
  AppWindow,
  Workflow,
  Compass,
  Users,
  TrendingUp,
  Sparkles,
  Share2,
  Table2,
  Boxes,
  Flame,
  FileCode,
} from 'lucide-react';

export const Habilidades: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaHabilidad | 'Todas'>('Todas');

  const habilidadesFiltradas = categoriaActiva === 'Todas'
    ? habilidades
    : habilidades.filter((h) => h.categoria === categoriaActiva);

  const getIconoTecnologia = (nombre: string, categoria?: CategoriaHabilidad) => {
    const norm = nombre.toLowerCase().trim();

    // 1. Análisis de Datos
    if (norm.includes('power bi')) {
      return <BarChart3 className="w-5 h-5 text-amber-500 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('tableau')) {
      return <Layers className="w-5 h-5 text-blue-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('sql')) {
      return <Database className="w-5 h-5 text-indigo-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('excel')) {
      return <FileSpreadsheet className="w-5 h-5 text-emerald-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('storytelling')) {
      return <Sparkles className="w-5 h-5 text-purple-600 group-hover:text-[#2563EB] transition-colors" />;
    }

    // 2. Programación
    if (norm.includes('python')) {
      return <Code2 className="w-5 h-5 text-sky-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm === 'r' || norm.startsWith('r ')) {
      return <FileCode className="w-5 h-5 text-blue-500 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('git')) {
      return <GitBranch className="w-5 h-5 text-orange-600 group-hover:text-[#2563EB] transition-colors" />;
    }

    // 3. Ingeniería de Datos
    if (norm.includes('fabric')) {
      return <Boxes className="w-5 h-5 text-teal-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('databricks')) {
      return <Flame className="w-5 h-5 text-red-500 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('pipeline') || norm.includes('etl')) {
      return <Workflow className="w-5 h-5 text-blue-600 group-hover:text-[#2563EB] transition-colors" />;
    }

    // 4. Nube
    if (norm.includes('azure')) {
      return <Cloud className="w-5 h-5 text-sky-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('aws')) {
      return <Cloud className="w-5 h-5 text-amber-600 group-hover:text-[#2563EB] transition-colors" />;
    }

    // 5. Ciencia de Datos
    if (norm.includes('machine learning')) {
      return <Brain className="w-5 h-5 text-purple-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('pandas') || norm.includes('numpy')) {
      return <Table2 className="w-5 h-5 text-indigo-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('estadística') || norm.includes('estadistica')) {
      return <TrendingUp className="w-5 h-5 text-cyan-600 group-hover:text-[#2563EB] transition-colors" />;
    }

    // 6. Automatización y Low-Code
    if (norm.includes('power automate')) {
      return <Zap className="w-5 h-5 text-blue-500 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('power apps')) {
      return <AppWindow className="w-5 h-5 text-purple-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('n8n')) {
      return <Share2 className="w-5 h-5 text-rose-500 group-hover:text-[#2563EB] transition-colors" />;
    }

    // 7. Metodologías
    if (norm.includes('crisp')) {
      return <Compass className="w-5 h-5 text-teal-600 group-hover:text-[#2563EB] transition-colors" />;
    }
    if (norm.includes('scrum')) {
      return <Users className="w-5 h-5 text-emerald-600 group-hover:text-[#2563EB] transition-colors" />;
    }

    // Fallbacks por categoría
    if (categoria === 'Programación') return <Code2 className="w-5 h-5 text-slate-700" />;
    if (categoria === 'Nube') return <Cloud className="w-5 h-5 text-slate-700" />;
    if (categoria === 'Ingeniería de Datos') return <Workflow className="w-5 h-5 text-slate-700" />;
    if (categoria === 'Ciencia de Datos') return <Brain className="w-5 h-5 text-slate-700" />;
    if (categoria === 'Automatización y Low-Code') return <Zap className="w-5 h-5 text-slate-700" />;
    if (categoria === 'Metodologías') return <Compass className="w-5 h-5 text-slate-700" />;
    return <Database className="w-5 h-5 text-slate-700" />;
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

      {/* Skills Grid: Clean, Modern, Compact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {habilidadesFiltradas.map((item) => {
          return (
            <div
              key={item.nombre}
              className="group relative p-5 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              {/* Header: Icon + Name */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-blue-50/70 group-hover:border-blue-200 transition-colors shadow-2xs">
                  {getIconoTecnologia(item.nombre, item.categoria)}
                </div>
                <h3 className="text-lg sm:text-[19px] font-tech font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {item.nombre}
                </h3>
              </div>

              {/* Herramientas que forman parte de la tecnología principal */}
              {item.herramientasRelacionadas && item.herramientasRelacionadas.length > 0 && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 mt-auto">
                  <span className="text-xs font-body font-medium text-slate-400 mr-0.5 shrink-0">
                    Incluido:
                  </span>
                  {item.herramientasRelacionadas.map((rel, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-xs font-tech text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80"
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
    </section>
  );
};
