import { HabilidadItem, CategoriaHabilidad } from '../types';

export const categoriasHabilidades: CategoriaHabilidad[] = [
  'Análisis de Datos',
  'Programación',
  'Ingeniería de Datos',
  'Nube',
  'Ciencia de Datos',
  'Automatización y Low-Code',
  'Metodologías'
];

export const habilidades: HabilidadItem[] = [
  // Análisis de Datos
  {
    nombre: "Power BI",
    categoria: "Análisis de Datos",
    destacada: true,
    descripcion: "Modelado dimensional con DAX, creación de tableros analíticos interactivos y publicación en Power BI Service.",
    herramientasRelacionadas: ["DAX", "Power Query", "Data Gateway", "DirectQuery"]
  },
  {
    nombre: "Tableau",
    categoria: "Análisis de Datos",
    destacada: true,
    descripcion: "Exploración visual avanzada, storytelling con datos, dashboards ejecutivos y cálculos de nivel de detalle (LOD).",
    herramientasRelacionadas: ["Tableau Prep", "LOD Expressions", "Tableau Server"]
  },
  {
    nombre: "SQL",
    categoria: "Análisis de Datos",
    destacada: true,
    descripcion: "Consultas complejas, window functions, optimización de índices y transformaciones para analítica empresarial.",
    herramientasRelacionadas: ["PostgreSQL", "T-SQL", "MySQL", "Snowflake SQL"]
  },
  {
    nombre: "Excel Avanzado",
    categoria: "Análisis de Datos",
    descripcion: "Modelos financieros, Power Pivot, Power Query, funciones dinámicas y auditoría de datos operativos.",
    herramientasRelacionadas: ["Power Pivot", "VBA", "Power Query"]
  },
  {
    nombre: "Storytelling con Datos",
    categoria: "Análisis de Datos",
    descripcion: "Traducción de hallazgos estadísticos y cuantitativos en narrativas claras para líderes de negocio.",
    herramientasRelacionadas: ["Data Communication", "Visual Design", "Executive Reporting"]
  },

  // Programación
  {
    nombre: "Python",
    categoria: "Programación",
    destacada: true,
    descripcion: "Desarrollo de scripts de extracción, automatización, bibliotecas de análisis numérico y empaquetado de código.",
    herramientasRelacionadas: ["Pandas", "NumPy", "Jupyter", "Virtualenv"]
  },
  {
    nombre: "R",
    categoria: "Programación",
    descripcion: "Análisis estadístico exploratorio, modelado probabilístico y visualización con paquetes especializados.",
    herramientasRelacionadas: ["ggplot2", "dplyr", "RStudio"]
  },
  {
    nombre: "Bash / Shell",
    categoria: "Programación",
    descripcion: "Automatización de tareas en servidor, scripts de orquestación básica y gestión de entornos Linux.",
    herramientasRelacionadas: ["Cron", "Linux CLI", "SSH"]
  },
  {
    nombre: "Git",
    categoria: "Programación",
    destacada: true,
    descripcion: "Control de versiones, ramificación colaborativa, revisiones de código y flujos en GitHub.",
    herramientasRelacionadas: ["GitHub", "Pull Requests", "CI/CD Actions"]
  },

  // Ingeniería de Datos
  {
    nombre: "Microsoft Fabric",
    categoria: "Ingeniería de Datos",
    destacada: true,
    descripcion: "Arquitectura analítica integral con OneLake, Lakehouses, Data Warehouses y sincronización empresarial.",
    herramientasRelacionadas: ["OneLake", "Fabric Data Factory", "Direct Lake"]
  },
  {
    nombre: "Databricks",
    categoria: "Ingeniería de Datos",
    destacada: true,
    descripcion: "Plataforma Lakehouse para procesamiento distribuido con Apache Spark, Delta Lake y gestión de clústeres.",
    herramientasRelacionadas: ["Delta Lake", "Unity Catalog", "PySpark"]
  },
  {
    nombre: "Apache Spark",
    categoria: "Ingeniería de Datos",
    destacada: true,
    descripcion: "Procesamiento de datos a gran escala en batch y streaming mediante transformaciones optimizadas con PySpark.",
    herramientasRelacionadas: ["PySpark", "Spark SQL", "Distributed Computing"]
  },
  {
    nombre: "ETL / ELT Pipelines",
    categoria: "Ingeniería de Datos",
    descripcion: "Diseño y orquestación de flujos de extracción, carga y transformación con validación de calidad del dato.",
    herramientasRelacionadas: ["Airflow", "Data Pipelines", "Data Quality"]
  },
  {
    nombre: "dbt",
    categoria: "Ingeniería de Datos",
    descripcion: "Transformación analítica modular dentro del data warehouse con control de versiones y pruebas automatizadas.",
    herramientasRelacionadas: ["SQL Models", "Jinja", "Data Lineage"]
  },

  // Nube
  {
    nombre: "Azure",
    categoria: "Nube",
    destacada: true,
    descripcion: "Servicios analíticos como Azure Synapse, Azure Data Factory, Blob Storage y Azure SQL Database.",
    herramientasRelacionadas: ["Azure Synapse", "Data Factory", "ADLS Gen2"]
  },
  {
    nombre: "AWS",
    categoria: "Nube",
    descripcion: "Almacenamiento y procesamiento escalable con S3, Glue, Redshift y computación en la nube.",
    herramientasRelacionadas: ["S3", "Athena", "Glue"]
  },
  {
    nombre: "Google Cloud",
    categoria: "Nube",
    descripcion: "Consultas analíticas a gran escala en BigQuery, Cloud Storage y flujos de datos.",
    herramientasRelacionadas: ["BigQuery", "Cloud Storage", "Cloud Functions"]
  },

  // Ciencia de Datos
  {
    nombre: "Machine Learning",
    categoria: "Ciencia de Datos",
    destacada: true,
    descripcion: "Modelos de clasificación, regresión, clustering y validación cruzada para predicción de variables de negocio.",
    herramientasRelacionadas: ["Scikit-learn", "XGBoost", "Model Evaluation"]
  },
  {
    nombre: "Pandas & NumPy",
    categoria: "Ciencia de Datos",
    destacada: true,
    descripcion: "Manipulación eficiente de estructuras tabulares, operaciones vectorizadas y limpieza rigurosa.",
    herramientasRelacionadas: ["DataFrames", "Vectorized Arrays", "Data Wrangling"]
  },
  {
    nombre: "Estadística Aplicada",
    categoria: "Ciencia de Datos",
    descripcion: "Pruebas de hipótesis, inferencia estadística, distribuciones de probabilidad y análisis multivariante.",
    herramientasRelacionadas: ["A/B Testing", "Hypothesis Testing", "Correlation Analysis"]
  },

  // Automatización y Low-Code
  {
    nombre: "Power Automate",
    categoria: "Automatización y Low-Code",
    destacada: true,
    descripcion: "Automatización de flujos de trabajo en la nube y de escritorio (RPA) para integración de datos y alertas.",
    herramientasRelacionadas: ["Cloud Flows", "Desktop RPA", "Connectors"]
  },
  {
    nombre: "Power Apps",
    categoria: "Automatización y Low-Code",
    descripcion: "Desarrollo rápido de aplicaciones de captura de datos operacionales conectadas a fuentes corporativas.",
    herramientasRelacionadas: ["Canvas Apps", "Dataverse", "SharePoint Lists"]
  },
  {
    nombre: "n8n",
    categoria: "Automatización y Low-Code",
    descripcion: "Orquestación de flujos de integración entre servicios mediante webhooks, nodos personalizados y APIs.",
    herramientasRelacionadas: ["Webhooks", "Self-Hosted Workflows", "API Integrations"]
  },

  // Metodologías
  {
    nombre: "CRISP-DM",
    categoria: "Metodologías",
    destacada: true,
    descripcion: "Marco metodológico estándar para estructurar proyectos analíticos desde la comprensión del negocio hasta el despliegue.",
    herramientasRelacionadas: ["Data Mining Cycle", "Business Understanding", "Deployment"]
  },
  {
    nombre: "Scrum",
    categoria: "Metodologías",
    descripcion: "Gestión ágil de proyectos en sprints con entregables iterativos, refinamientos continuos y retrospectivas.",
    herramientasRelacionadas: ["Agile Sprints", "Kanban", "Jira"]
  },
  {
    nombre: "Data Governance",
    categoria: "Metodologías",
    descripcion: "Definición de glosarios de datos, linaje, estándares de metadatos y políticas de calidad analítica.",
    herramientasRelacionadas: ["Data Lineage", "Cataloging", "Data Quality SLA"]
  }
];
