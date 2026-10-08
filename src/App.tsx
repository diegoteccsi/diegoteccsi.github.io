import React from 'react';
import { Navbar } from './components/Navbar';
import { Inicio } from './components/Inicio';
import { SobreMi } from './components/SobreMi';
import { Habilidades } from './components/Habilidades';
import { Proyectos } from './components/Proyectos';
import { Experiencia } from './components/Experiencia';
import { Educacion } from './components/Educacion';
import { Certificaciones } from './components/Certificaciones';
import { Contacto } from './components/Contacto';
import { PieDePagina } from './components/PieDePagina';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F7F8FA] text-[#111111] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Custom Interactive Desktop Cursor */}
      <CustomCursor />

      {/* Minimalist Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Inicio />
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Experiencia />
        <Educacion />
        <Certificaciones />
        <Contacto />
      </main>

      {/* Clean Footer */}
      <PieDePagina />
    </div>
  );
}
