import React from 'react';

interface ProyectoVisualProps {
  tipo: 'pipeline' | 'analytics' | 'ml' | 'lakehouse';
  titulo: string;
}

export const ProyectoVisual: React.FC<ProyectoVisualProps> = ({ tipo, titulo }) => {
  return (
    <div className="relative w-full aspect-16/9 bg-[#F0F2F5] border border-[#E5E7EB] overflow-hidden rounded-xl flex items-center justify-center select-none group-hover:border-[#2563EB]/40 transition-colors duration-300">
      {/* Background Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:28px_28px]" 
        aria-hidden="true" 
      />

      {tipo === 'pipeline' && (
        <svg
          viewBox="0 0 600 340"
          className="w-full h-full p-6 text-slate-700 transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection Lines */}
          <path d="M90 170 H220" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M220 170 C280 170 300 110 360 110" stroke="#93C5FD" strokeWidth="2.5" />
          <path d="M220 170 C280 170 300 230 360 230" stroke="#93C5FD" strokeWidth="2.5" />
          <path d="M360 110 H490" stroke="#2563EB" strokeWidth="2.5" />
          <path d="M360 230 H490" stroke="#2563EB" strokeWidth="2.5" />

          {/* Node 1: Sources */}
          <rect x="30" y="130" width="80" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="70" cy="155" r="14" fill="#EFF6FF" />
          <path d="M63 155h14M70 148v14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          <text x="70" y="195" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">FUENTES</text>

          {/* Node 2: Ingest & Raw (Bronze) */}
          <rect x="180" y="130" width="80" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="220" cy="155" r="14" fill="#F1F5F9" />
          <circle cx="220" cy="155" r="6" fill="#64748B" />
          <text x="220" y="195" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">BRONZE</text>

          {/* Node 3A: Transform (Silver) */}
          <rect x="320" y="70" width="80" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="360" cy="95" r="14" fill="#EFF6FF" />
          <circle cx="360" cy="95" r="6" fill="#3B82F6" />
          <text x="360" y="135" textAnchor="middle" fill="#3B82F6" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">SILVER</text>

          {/* Node 3B: Curated Layer */}
          <rect x="320" y="190" width="80" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="360" cy="215" r="14" fill="#EFF6FF" />
          <circle cx="360" cy="215" r="6" fill="#3B82F6" />
          <text x="360" y="255" textAnchor="middle" fill="#3B82F6" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">TRANSFORM</text>

          {/* Node 4: Gold / Lakehouse Analytics */}
          <rect x="460" y="120" width="100" height="100" rx="14" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
          <rect x="475" y="135" width="70" height="45" rx="6" fill="#EFF6FF" />
          <path d="M485 165l12-14 10 8 18-18" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="510" y="205" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="Space Mono, monospace" fontWeight="700">GOLD / DW</text>

          {/* Animated Pulse indicator */}
          <circle cx="360" cy="95" r="18" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
        </svg>
      )}

      {tipo === 'analytics' && (
        <svg
          viewBox="0 0 600 340"
          className="w-full h-full p-6 transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dashboard Window Frame */}
          <rect x="40" y="35" width="520" height="270" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="40" y1="75" x2="560" y2="75" stroke="#F1F5F9" strokeWidth="2" />

          {/* Window dots */}
          <circle cx="65" cy="55" r="4" fill="#E2E8F0" />
          <circle cx="78" cy="55" r="4" fill="#E2E8F0" />
          <circle cx="91" cy="55" r="4" fill="#E2E8F0" />

          <text x="300" y="59" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Space Mono, monospace" fontWeight="700">
            EXECUTIVE DATA COCKPIT & METRICS
          </text>

          {/* Metric Cards Top */}
          <rect x="65" y="95" width="135" height="55" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="80" y="115" fill="#64748B" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">MÉTRICA CLAVE</text>
          <text x="80" y="138" fill="#0F172A" fontSize="16" fontWeight="700" fontFamily="Space Mono, monospace">98.4%</text>

          <rect x="220" y="95" width="135" height="55" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="235" y="115" fill="#64748B" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">VOLUMEN</text>
          <text x="235" y="138" fill="#2563EB" fontSize="16" fontWeight="700" fontFamily="Space Mono, monospace">+2.4M</text>

          <rect x="375" y="95" width="160" height="55" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="390" y="115" fill="#64748B" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">EFICIENCIA SLA</text>
          <text x="390" y="138" fill="#0F172A" fontSize="16" fontWeight="700" fontFamily="Space Mono, monospace">99.9%</text>

          {/* Chart Area Left: Trend Curve */}
          <rect x="65" y="165" width="290" height="120" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <path d="M85 255 C120 230 150 245 180 210 C210 185 250 200 280 185 C305 175 325 180 340 175" stroke="#2563EB" strokeWidth="2.5" fill="none" />
          <path d="M85 255 C120 230 150 245 180 210 C210 185 250 200 280 185 C305 175 325 180 340 175 L340 265 L85 265 Z" fill="url(#blueGradient)" opacity="0.12" />

          {/* Chart Area Right: Distribution Bars */}
          <rect x="375" y="165" width="160" height="120" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <rect x="395" y="240" width="18" height="30" rx="3" fill="#93C5FD" />
          <rect x="425" y="210" width="18" height="60" rx="3" fill="#60A5FA" />
          <rect x="455" y="185" width="18" height="85" rx="3" fill="#2563EB" />
          <rect x="485" y="225" width="18" height="45" rx="3" fill="#93C5FD" />

          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {tipo === 'ml' && (
        <svg
          viewBox="0 0 600 340"
          className="w-full h-full p-6 transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mathematical Coordinates */}
          <rect x="40" y="30" width="520" height="280" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="90" y1="60" x2="90" y2="270" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="90" y1="270" x2="520" y2="270" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Non-linear Decision Boundary */}
          <path
            d="M100 250 C180 230 220 180 300 150 C380 120 420 90 510 70"
            stroke="#2563EB"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Cluster A: Data Points */}
          <circle cx="150" cy="140" r="5" fill="#2563EB" />
          <circle cx="170" cy="110" r="6" fill="#2563EB" />
          <circle cx="190" cy="150" r="4.5" fill="#2563EB" />
          <circle cx="220" cy="120" r="5" fill="#2563EB" />
          <circle cx="240" cy="95" r="6" fill="#2563EB" />
          <circle cx="270" cy="115" r="5.5" fill="#2563EB" />
          <circle cx="310" cy="90" r="6.5" fill="#2563EB" />
          <circle cx="350" cy="75" r="5" fill="#2563EB" />

          {/* Cluster B: Negative / Contrast Class */}
          <circle cx="180" cy="245" r="5" fill="#94A3B8" />
          <circle cx="220" cy="230" r="5.5" fill="#94A3B8" />
          <circle cx="260" cy="240" r="4.5" fill="#94A3B8" />
          <circle cx="310" cy="210" r="6" fill="#94A3B8" />
          <circle cx="360" cy="195" r="5" fill="#94A3B8" />
          <circle cx="410" cy="180" r="5.5" fill="#94A3B8" />
          <circle cx="450" cy="160" r="6" fill="#94A3B8" />
          <circle cx="480" cy="140" r="5" fill="#94A3B8" />

          {/* Centroid Crosshairs */}
          <circle cx="220" cy="120" r="22" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="410" cy="180" r="22" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

          <text x="120" y="70" fill="#64748B" fontSize="10" fontFamily="Space Mono, monospace" fontWeight="700">
            HIPERPLANO DE CLASIFICACIÓN
          </text>
        </svg>
      )}

      {tipo === 'lakehouse' && (
        <svg
          viewBox="0 0 600 340"
          className="w-full h-full p-6 transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid Layout representing distributed tasks */}
          <rect x="50" y="40" width="500" height="260" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />

          {/* DAG Trigger Box */}
          <rect x="80" y="70" width="110" height="45" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
          <text x="135" y="97" textAnchor="middle" fill="#1D4ED8" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">TRIGGER: EVENT</text>

          {/* Connection */}
          <path d="M190 92 H245" stroke="#93C5FD" strokeWidth="2" />

          {/* Task 1 */}
          <rect x="245" y="70" width="130" height="45" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          <text x="310" y="97" textAnchor="middle" fill="#334155" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">EXTRACT & PARSE</text>

          <path d="M375 92 H430" stroke="#93C5FD" strokeWidth="2" />

          {/* Task 2 Success */}
          <rect x="430" y="70" width="90" height="45" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
          <text x="475" y="97" textAnchor="middle" fill="#15803D" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">VALIDADO</text>

          {/* Split branch down */}
          <path d="M310 115 V175" stroke="#CBD5E1" strokeWidth="2" />

          {/* Branch Task */}
          <rect x="245" y="175" width="130" height="45" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          <text x="310" y="202" textAnchor="middle" fill="#334155" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">LOAD TO ONE-LAKE</text>

          <path d="M375 197 H430" stroke="#2563EB" strokeWidth="2" />

          {/* Sync Endpoint */}
          <rect x="430" y="175" width="90" height="45" rx="8" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
          <text x="475" y="202" textAnchor="middle" fill="#1D4ED8" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="700">DELTA SYNC</text>

          <text x="80" y="265" fill="#64748B" fontSize="10" fontFamily="Space Mono, monospace" fontWeight="700">
            ORQUESTACIÓN DE FLUJOS & INTEGRACIÓN
          </text>
        </svg>
      )}

      {/* Floating subtle badge in corner */}
      <div className="absolute top-4 right-4 text-[10px] font-tech font-bold uppercase tracking-wider text-slate-500 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-200 shadow-xs pointer-events-none">
        CASO DE ESTUDIO
      </div>
    </div>
  );
};
