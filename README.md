# Arquitectura y Desarrollo de Plantilla Web para Profesionales de Datos

Plantilla web monopoagina (Single Page Application) orientada a la exposicion de proyectos y competencias para perfiles de Analisis de Datos, Ingenieria de Datos, Automatizacion y Ciencia de Datos. El diseno prioriza rendimiento de carga, estetica tecnica contemporanea y una separacion estricta entre la capa de interfaz y la capa de datos.

---

## Enfoque y Proposito Tecnico

Esta aplicacion web fue desarrollada como una base de codigo modular y extensible para la creacion de portafolios tecnicos orientados al sector de datos. Su proposito es transformar datos estructurados en una experiencia visual interactiva sin requerir sistemas de gestion de contenidos (CMS) externos ni dependencias de backend complejas, aprovechando al maximo la potencia del procesamiento del lado del cliente.

---

## Stack Tecnologico y Frameworks

El proyecto utiliza un conjunto moderno de herramientas de frontend orientadas a tipado estricto, bajo peso de empaquetado y alto rendimiento de renderizado:

- React 19: Biblioteca base para la construccion de la interfaz de usuario basada en componentes funcionales y Hooks nativos de estado y ciclo de vida.
- TypeScript 5: Lenguaje de programacion principal aplicado de forma rigurosa en todo el codigo, asegurando seguridad de tipos en tiempo de compilacion sin uso de tipos dinamicos indefinidos.
- Vite: Entorno de compilacion y empaquetador ultrarrapido para modulos ES nativos, con optimizacion de dependencias y generacion de bundles estaticos de alto rendimiento.
- Tailwind CSS v4: Motor de estilos utilitario de nueva generacion, configurado para proveer una hoja de estilos atomica con soporte para diseno responsivo y variables CSS nativas.
- Three.js: Motor de graficos 3D para navegadores, utilizado para la generacion en tiempo real de escenas en WebGL aceleradas por GPU.
- Lucide React: Libreria de iconografia vectorial SVG optimizada como componentes de React independientes.

---

## Patrones y Tecnicas de Desarrollo

La arquitectura de software implementa diversos patrones modernos de ingenieria web:

### 1. Arquitectura de Datos Desacoplada (Data-Driven Architecture)
El contenido de la interfaz (proyectos, metricas, historial laboral, habilidades y credenciales) no esta incrustado de forma rigida en el JSX de los componentes. En su lugar, se organiza como estructuras de datos fuertemente tipadas en archivos modulares dentro del directorio de datos. Esto permite actualizar o reemplazar todo el contenido del sitio modificando unicamente los objetos de datos, sin alterar la estructura del marcado ni la logica de interfaz.

### 2. Desarrollo Basado en Componentes (Component-Driven Development)
Cada elemento de la interfaz responde a una responsabilidad unica y delimitada:
- Navegacion global y estados de apertura interactiva.
- Presentacion principal con integracion de lienzo visual.
- Paneles informativos con metricas cuantitativas.
- Componentes de acordeon con control de estado desplegable/contraido por identificador unico.
- Modales accesibles con bloqueo de scroll y renderizado condicional de vistas analiticas.
- Botones flotantes de retorno accionados por escuchadores pasivos del evento de desplazamiento (`window.addEventListener('scroll')`).

### 3. Escena 3D Interactiva y Gestion del Ciclo de Vida
El fondo visual interactivo implementa un sistema de particulas tridimensionales mediante Three.js:
- Escucha los eventos del puntero para generar desplazamientos parametricos en el sistema de camara y coordenadas de los vertices.
- Ejecuta el bucle de animacion a traves de `requestAnimationFrame`.
- Implementa limpieza estricta en el retorno de los Hooks de efecto (`useEffect`), liberando geometrias (`geometry.dispose()`), materiales (`material.dispose()`) y el contexto del renderizador WebGL para prevenir fugas de memoria.

### 4. Optimizacion de Accesibilidad y Rendimiento
- Consulta de preferencias de movimiento (`prefers-reduced-motion`) mediante CSS para usuarios sensibles a las animaciones.
- Estructura semantica basada en etiquetas estandar HTML5 (`section`, `header`, `nav`, `main`, `footer`, `aside`, `dialog`).
- Diseno adaptativo "mobile-first" que reconfigura las rejillas y espaciados mediante utilidades de punto de quiebre responsivo.

---

## Estructura del Codigo Fuente

El proyecto sigue una distribucion modular clara:

```text
.
|-- index.html              # Punto de entrada HTML, enlace a fuentes web y metadatos base
|-- package.json            # Declaracion de dependencias y scripts de desarrollo
|-- tsconfig.json           # Configuracion de compilacion y reglas de TypeScript
|-- vite.config.ts          # Configuracion de plugins y optimizaciones de empaquetado
`-- src/
    |-- main.tsx            # Inicializacion del DOM virtual y montaje de la aplicacion
    |-- App.tsx             # Componente raiz y orden secuencial de secciones
    |-- index.css           # Directivas globales de Tailwind y utilidades tipograficas
    |-- types.ts            # Contratos de interfaz, esquemas de datos y tipos TypeScript
    |-- components/         # Modulos de interfaz de usuario
    |   |-- Navbar.tsx          # Barra de navegacion flotante y menu adaptable
    |   |-- Inicio.tsx          # Seccion cabecera con llamada a la accion y enlaces
    |   |-- FondoInteractivo.tsx # Lienzo WebGL con sistema de particulas 3D
    |   |-- SobreMi.tsx         # Bloque descriptivo y tablero de metricas clave
    |   |-- Experiencia.tsx     # Cronologia con estados interactivos colapsables
    |   |-- Proyectos.tsx       # Rejilla de casos de estudio y filtrado analitico
    |   |-- ProyectoModal.tsx   # Ventana modal de detalle tecnico y entregables
    |   |-- ProyectoVisual.tsx  # Simulador visual de dashboards y pipelines
    |   |-- Habilidades.tsx     # Tarjetas de competencias tecnicas y herramientas
    |   |-- Educacion.tsx       # Seccion de formacion academica
    |   |-- Certificaciones.tsx # Registro de credenciales y certificaciones
    |   |-- Contacto.tsx        # Canales de comunicacion y utilidad de copiado
    |   |-- BotonVolverArriba.tsx # Boton flotante de retorno con deteccion de scroll
    |   |-- CustomCursor.tsx    # Puntero interactivo con seguimiento visual
    |   `-- PieDePagina.tsx     # Cierre de pagina institucional
    `-- data/               # Coleccion de datos tipados desacoplados
        |-- perfil.ts           # Definicion general de rol, biografia y canales
        |-- experiencia.ts      # Trayectoria profesional y logros cuantificables
        |-- proyectos.ts        # Fichas completas de proyectos, herramientas y metricas
        |-- habilidades.ts      # Taxonomia de tecnologias principales y stack asociado
        |-- educacion.ts        # Registro academico
        `-- certificaciones.ts  # Registro de certificados emitidos
```

---

## Sistema de Diseno: Paleta de Colores y Variables

La interfaz se basa en una paleta cromatica neutral de alto contraste inspirada en interfaces analiticas modernas, utilizando tonos sobrios combinados con acentos cromaticos controlados:

### Colores Base y Estructura
- Fondo Principal (`#F7F8FA`): Tono gris neutro claro de descanso visual para el lienzo general.
- Superficie de Tarjetas (`#FFFFFF`): Blanco puro con bordes sutiles para delimitar zonas de contenido.
- Texto Principal (`#111111`): Negro neutro de alto contraste para lectura comoda de titulos y contenido central.
- Texto Secundario (`#62666D` / `#64748B`): Escala de grises intermedios para descripciones, metadatos y etiquetas secundarias.
- Bordes y Separadores (`#E5E7EB` / `#CBD5E1`): Gris suave para lineas divisorias, contornos de tarjetas y contenedores.

### Acentos de Identidad y Gradientes
- Azul Tecnico (`#2563EB`): Color de enfasis principal para botones de accion, enlaces interactivos y estados activos.
- Gradiente de Rol y Enfasis (`#39BCF8` a `#8B5CF6`): Gradiente lineal que inicia en cian/azul claro y transiciona hacia purpura/violeta, empleado en textos destacados y controles flotantes.
- Indicadores de Estado: Tonos esmeralda (`#10B981`) para confirmaciones visuales y estados activos.

---

## Sistema Tipografico

El diseno combina familias tipograficas que equilibran la sobriedad ejecutiva con el caracter tecnologico. Estan mapeadas en `src/index.css` a traves de clases utilitarias personalizadas:

| Clase Utilitaria | Fuente Tipografica | Categoria | Uso en la Aplicacion |
| :--- | :--- | :--- | :--- |
| `font-display` | Plus Jakarta Sans | Sans-serif geometrica | Titulos de gran tamano, encabezados principales (H1, H2, H3), nombres de proyectos y rotulos de tarjetas de habilidades. Aporta jerarquia y claridad visual. |
| `font-body` / `font-sans` | Inter | Sans-serif neutral | Parrafos de texto, descripciones tecnicas, items de listas y elementos de navegacion general. Maxima legibilidad en pantallas de cualquier resolucion. |
| `font-code` | JetBrains Mono | Monospaced | Badges tecnicos, numeracion secuencial (ej. "01", "02"), chips de tecnologias y especificaciones de metricas cuantitativas. |
| `font-tech` | Space Mono | Monospaced | Indicadores de terminal, subetiquetas de seccion en mayusculas y referencias tecnicas directas. |
