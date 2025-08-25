# FunctionalJS

Pequeño proyecto educativo con ejemplos de programación funcional en JavaScript. Cada archivo en `js/*.js` muestra un concepto distinto (funciones de orden superior, pureza, closures, currying, etc.). La página `index.html` carga un ejemplo a la vez para ver la salida en la consola del navegador.

## Estructura del proyecto

- `index.html`: HTML base para ejecutar los ejemplos. Controla qué script de `js/` se carga.
- `assets/css/style.css`: Estilos básicos (gradiente y tipografía de Google Fonts) para la página de demostración.
- `js/`
  - `01-app.js`: Función como valor y llamada indirecta (`resultado = suma`).
  - `02-app.js`: Funciones de orden superior (pasar funciones como argumentos).
  - `03-app.js`: `Array.prototype.filter` con predicado (`precio > 400`).
  - `04-app.js`: `Array.prototype.map` para proyectar nombres.
  - `05-app.js`: Comparativa `map` y `filter` sobre el mismo arreglo (`carrito`).
  - `06-app.js`: Función pura (duplicar número) y no mutabilidad del argumento.
  - `07-app.js`: Funciones que retornan funciones.
  - `08-app.js`: Closures (acceso a variables del alcance externo).
  - `09-app.js`: Currying y aplicación parcial.
  - `10-app.js`: Composición por comportamientos + factories con `Object.assign` (cliente/empleado).

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari). No se requieren dependencias ni servidor.

## Cómo ejecutar

1. Abre `index.html` directamente en tu navegador (doble clic o arrastrar al navegador).
2. Abre la consola del navegador para ver las salidas:
   - Windows/Linux: `Ctrl + Shift + J` (Chrome/Edge) o `Ctrl + Shift + K` (Firefox).
   - macOS: `Cmd + Option + J` (Chrome/Edge) o `Cmd + Option + K` (Firefox).

Por defecto, `index.html` carga `js/10-app.js`:
```html
<!-- Otras opciones están comentadas -->
<script src="js/10-app.js"></script>
```

## Cambiar de ejemplo

En `index.html`, descomenta el `<script>` del archivo que quieres probar y comenta el resto. Por ejemplo, para ejecutar el ejemplo 03:
```html
<!-- <script src="js/01-app.js"></script> -->
<!-- <script src="js/02-app.js"></script> -->
<script src="js/03-app.js"></script>
<!-- ... -->
```

Tip: Carga una sola etiqueta `<script>` a la vez para evitar interferencias entre ejemplos.

## Notas de estilo

- Tipografía: Google Font `Carrois Gothic SC`.
- Estilos en `assets/css/style.css` aplican un gradiente de fondo y tamaños de fuente para títulos y párrafos.

## Conceptos cubiertos

- Funciones como ciudadanos de primera clase.
- Funciones de orden superior (pasar/retornar funciones).
- Pureza y no mutabilidad.
- `map`, `filter` y proyección de datos.
- Closures y alcance léxico.
- Currying y aplicación parcial.
- Composición de comportamientos y patrones de factory con `Object.assign`.

## Sugerencias

- Si abres el proyecto desde un servidor local, asegúrate de que la ruta de estilos en `index.html` sea correcta. La ruta recomendada desde la raíz es:
  ```html
  <link rel="stylesheet" href="assets/css/style.css">
  ```
  (Actualmente en `index.html` aparece como `../assets/css/style.css`, que puede fallar si el archivo se sirve desde la raíz.)

