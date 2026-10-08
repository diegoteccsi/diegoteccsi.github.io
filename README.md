# Portafolio Profesional de Diego Teccsi

Portafolio web profesional interactivo para **Análisis de Datos, Ingeniería de Datos y Ciencia de Datos**.

---

## 🚀 Despliegue en GitHub Pages (Solución al error del Action)

El error ocurrió porque GitHub Actions intentó buscar un archivo `package-lock.json` que no estaba subido en el repositorio (`Dependencies lock file is not found`), y además la versión de Node 20 arrojó una advertencia de obsolescencia.

### Ya está corregido:
1. Se actualizó el flujo en `.github/workflows/deploy.yml` a **Node 22**.
2. Se eliminó la dependencia estricta de caché (`cache: 'npm'`).
3. Se cambió el comando de instalación a `npm install --legacy-peer-deps`, que instala las dependencias sin fallar si falta el lockfile.
4. Se generó el archivo `package-lock.json` en la raíz del proyecto para que puedas incluirlo en tu repositorio.

---

### Pasos para actualizar en GitHub:

1. **Sube los cambios actualizados a GitHub**:
   - Asegúrate de incluir `.github/workflows/deploy.yml` y `package-lock.json`.
2. Una vez hecho el push a `main`:
   - El Action se ejecutará automáticamente y compilará con éxito.
   - O ve a la pestaña **Actions** en tu repositorio, selecciona **Desplegar Portafolio a GitHub Pages** y pulsa **Run workflow**.

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Iniciar servidor local
npm run dev

# Compilar para producción
npm run build
```
