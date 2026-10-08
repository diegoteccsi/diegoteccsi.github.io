# Portafolio Profesional de Diego Teccsi

Portafolio web profesional interactivo para **Análisis de Datos, Ingeniería de Datos y Ciencia de Datos**.

---

## ⚡ Solución al problema de "Pantalla en blanco" en GitHub Pages

### ¿Por qué aparece la pantalla en blanco?
El archivo `index.html` en la raíz contiene:
```html
<script type="module" src="/src/main.tsx"></script>
```
El archivo `.tsx` es código fuente en TypeScript/React que los navegadores web **no pueden ejecutar directamente sin compilar**. 

Por defecto, GitHub Pages solo sirve archivos estáticos simples si está configurado en "Deploy from a branch". Al no ejecutarse el paso de compilación (`npm run build`), el navegador intenta abrir `/src/main.tsx` y falla con un error de tipo MIME o sintaxis, dejando la pantalla en blanco.

---

## 🚀 Cómo activarlo en GitHub (Solución en 3 pasos)

Ya dejamos configurado el flujo automatizado en `.github/workflows/deploy.yml`. Solo debes habilitarlo en tu repositorio:

1. Entra a tu repositorio en GitHub: `https://github.com/diegoteccsi/<tu-repositorio>`
2. Haz clic en la pestaña **Settings** (Configuración) en la parte superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment** > **Source**, cambia la opción:
   - De: `Deploy from a branch`
   - A: **`GitHub Actions`**
5. Haz un commit o push a la rama `main` (o ve a la pestaña **Actions** > **Desplegar Portafolio a GitHub Pages** y pulsa **Run workflow**).

GitHub ejecutará automáticamente `npm run build`, compilará el código y publicará la carpeta `dist/` en tu enlace de GitHub Pages en menos de 1 minuto.

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev

# Compilar para producción
npm run build
```
