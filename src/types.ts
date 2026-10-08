export interface PerfilData {
  nombre: string;
  iniciales: string;
  subtitulo: string;
  rolPrincipal: string;
  resumenHero: string;
  sobreMi: {
    parrafos: string[];
    enfoque: string[];
    metricasClave: {
      valor: string;
      etiqueta: string;
    }[];
  };
  contacto: {
    email: string;
    linkedin: string;
    github: string;
    ubicacion: string;
    disponibilidad: string;
  };
}

export type CategoriaHabilidad = 
  | 'Análisis de Datos'
  | 'Programación'
  | 'Ingeniería de Datos'
  | 'Nube'
  | 'Ciencia de Datos'
  | 'Automatización y Low-Code'
  | 'Metodologías';

export interface HabilidadItem {
  nombre: string;
  categoria: CategoriaHabilidad;
  destacada?: boolean;
  descripcion: string;
  herramientasRelacionadas?: string[];
}

export interface ProyectoItem {
  id: string;
  numero: string;
  titulo: string;
  categoria: string;
  resumen: string;
  descripcionCompleta: string;
  desafio: string;
  solucion: string;
  impacto: string;
  tecnologias: string[];
  enlaceDemo?: string;
  enlaceRepositorio?: string;
  tipoVisual: 'pipeline' | 'analytics' | 'ml' | 'lakehouse';
}

export interface ExperienciaItem {
  id: string;
  periodo: string;
  puesto: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  logros: string[];
  tecnologias: string[];
}

export interface EducacionItem {
  id: string;
  periodo: string;
  titulo: string;
  institucion: string;
  descripcion: string;
  mencion?: string;
}

export interface CertificacionItem {
  id: string;
  nombre: string;
  emisor: string;
  codigoCredencial: string;
  ano: string;
  enlaceVerificacion: string;
  categoria: string;
}
