import { CertificacionItem } from '../types';

export const certificaciones: CertificacionItem[] = [
  {
    id: "cert-01",
    nombre: "DATA ANALYST ASSOCIATE / FABRIC",
    emisor: "Microsoft",
    codigoCredencial: "PL-300",
    ano: "2023",
    enlaceVerificacion: "https://learn.microsoft.com",
    categoria: "Análisis & Fabric"
  },
  {
    id: "cert-02",
    nombre: "AZURE FUNDAMENTALS",
    emisor: "Microsoft Azure",
    codigoCredencial: "AZ-900",
    ano: "2024",
    enlaceVerificacion: "https://learn.microsoft.com",
    categoria: "Cloud & Data Engineering"
  },
  {
    id: "cert-03",
    nombre: "SCRUM",
    emisor: "Scrum.org",
    codigoCredencial: "PSM-I",
    ano: "2022",
    enlaceVerificacion: "https://scrum.org",
    categoria: "Metodologías Ágiles"
  }
];
