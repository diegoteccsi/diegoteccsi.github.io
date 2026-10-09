import { ProyectoItem } from '../types';

export const proyectos: ProyectoItem[] = [
  {
    id: "proyecto-01",
    numero: "01",
    titulo: "ARQUITECTURA & PIPELINE DE INGENIERÍA DE DATOS",
    categoria: "Ingeniería de Datos",
    resumen: "Diseño e implementación de un pipeline de datos escalable para ingesta, procesamiento batch y almacenamiento analítico en la nube.",
    descripcionCompleta: "Caso de estudio centrado en la unificación de múltiples fuentes de datos transaccionales, estructuración de capas Lakehouse (Bronze, Silver, Gold) y optimización de consultas complejas.",
    desafio: "Fragmentación de fuentes heterogéneas con inconsistencias de esquema y tiempos de procesamiento analítico no optimizados.",
    solucion: "Implementación de arquitectura modular utilizando Python, Spark y servicios en la nube con validación estricta de calidad y particionamiento eficiente.",
    impacto: "Reducción significativa en tiempos de consulta, disponibilidad garantizada de datos confiables y gobierno de esquemas estandarizado.",
    tecnologias: ["Python", "Apache Spark", "Azure", "SQL", "Databricks"],
    enlaceDemo: "#contacto",
    enlaceRepositorio: "https://github.com",
    tipoVisual: "pipeline"
  },
  {
    id: "proyecto-02",
    numero: "02",
    titulo: "PLATAFORMA ANALÍTICA & DASHBOARD EJECUTIVO",
    categoria: "Análisis de Datos",
    resumen: "Creación de un sistema de Business Intelligence integral con modelado semántico, KPIs clave y tableros interactivos para toma de decisiones.",
    descripcionCompleta: "Desarrollo de un modelo de datos en estrella con medidas DAX avanzadas, interfaz intuitiva de autoservicio y gobierno de acceso por roles para líderes departamentales.",
    desafio: "Dependencia de hojas de cálculo dispersas, reportes manuales propensos a error y falta de visibilidad en tiempo oportuno.",
    solucion: "Centralización del modelo semántico en Power BI y SQL con documentación de métricas, navegación orientada al usuario y actualización programada.",
    impacto: "Democratización del acceso a métricas estratégicas, reducción del tiempo de elaboración de reportes y adopción organizacional activa.",
    tecnologias: ["Power BI", "SQL", "DAX", "Microsoft Fabric", "Excel Avanzado"],
    enlaceDemo: "#contacto",
    enlaceRepositorio: "https://github.com",
    tipoVisual: "analytics"
  },
  {
    id: "proyecto-03",
    numero: "03",
    titulo: "MODELO PREDICTIVO & CIENCIA DE DATOS",
    categoria: "Ciencia de Datos",
    resumen: "Desarrollo de modelos de Machine Learning para estimación predictiva y detección de patrones a partir de datos históricos.",
    descripcionCompleta: "Aplicación de la metodología CRISP-DM abarcando ingeniería de características, análisis de correlación multivariante, entrenamiento y validación rigurosa de algoritmos predictivos.",
    desafio: "Necesidad de anticipar comportamientos y clasificar eventos críticos con alta precisión para minimizar riesgos operacionales.",
    solucion: "Pipeline experimental en Python con Scikit-learn, validación cruzada estratificada e interpretabilidad de variables clave con métricas claras.",
    impacto: "Mejora medible en la capacidad predictiva respecto a la línea base previa y automatización de inferencias sobre nuevos registros.",
    tecnologias: ["Python", "Scikit-learn", "Pandas", "NumPy", "CRISP-DM"],
    enlaceDemo: "#contacto",
    enlaceRepositorio: "https://github.com",
    tipoVisual: "ml"
  },
  {
    id: "proyecto-04",
    numero: "04",
    titulo: "AUTOMATIZACIÓN DE PROCESOS & FLUJOS LOW-CODE",
    categoria: "Automatización y Low-Code",
    resumen: "Integración automatizada entre sistemas corporativos y repositorios analíticos mediante orquestación de flujos y alertas inteligentes.",
    descripcionCompleta: "Implementación de flujos de trabajo que capturan eventos en tiempo real, validan entradas de información y sincronizan registros con bases de datos analíticas.",
    desafio: "Procesos manuales repetitivos de carga de información y retrasos en la notificación de anomalías en los datos.",
    solucion: "Diseño de flujos automatizados con Power Automate y n8n conectados a servicios REST y almacenamiento seguro en la nube.",
    impacto: "Eliminación de cuellos de botella manuales, trazabilidad completa de transferencias y notificaciones automáticas inmediatas.",
    tecnologias: ["Power Automate", "Power Apps", "n8n", "APIs REST", "SQL"],
    enlaceDemo: "#contacto",
    enlaceRepositorio: "https://github.com",
    tipoVisual: "lakehouse"
  }
];
