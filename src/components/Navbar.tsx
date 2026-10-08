import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { perfil } from '../data/perfil';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nombre: 'Sobre mí', href: '#sobre-mi' },
    { nombre: 'Habilidades', href: '#habilidades' },
    { nombre: 'Proyectos', href: '#proyectos' },
    { nombre: 'Experiencia', href: '#experiencia' },
    { nombre: 'Educación', href: '#educacion' },
    { nombre: 'Certificaciones', href: '#certificaciones' },
    { nombre: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F8FA]/90 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Zone: Single element with initials wordmark */}
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-[#111111] hover:text-[#2563EB] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Ir al inicio"
        >
          <span className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-mono text-xs tracking-wider group-hover:bg-[#2563EB] transition-colors">
            {perfil.iniciales}
          </span>
          <span className="hidden sm:inline font-semibold text-sm tracking-tight text-[#111111]">
            {perfil.nombre}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#62666D]"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.nombre}
              href={link.href}
              className="relative py-1 group hover:text-[#111111] transition-colors whitespace-nowrap"
            >
              <span>{link.nombre}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-semibold hover:bg-[#2563EB] transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Contactar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#111111] hover:bg-slate-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.nombre}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-2 text-sm font-medium text-[#111111] hover:text-[#2563EB] border-b border-slate-100 last:border-b-0 transition-colors"
              >
                <span>{link.nombre}</span>
                <span className="text-[#2563EB] text-xs">→</span>
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contacto"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>Contactar</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
