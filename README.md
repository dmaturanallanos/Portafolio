# Portafolio Profesional - Daniel Maturana

Portafolio web moderno para mostrar perfil profesional, experiencia, tecnologias, proyectos, estadisticas de GitHub y contacto. Esta construido con React, Vite, TypeScript, Tailwind CSS, Framer Motion, componentes estilo shadcn/ui, Lucide React y React Icons.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui style components
- Lucide React
- React Icons
- Lazy loading de secciones
- SEO basico
- Preparado para Vercel y GitHub Pages

## Instalacion

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev       # servidor local
npm run build     # build de produccion
npm run preview   # preview del build
npm run lint      # revision de lint
```

## Personalizacion rapida

Los datos principales estan en:

```txt
src/data/portfolio.ts
```

Desde ese archivo puedes cambiar:

- Nombre, titulo, descripcion y correo
- LinkedIn, GitHub y enlace del CV
- Tecnologias y niveles
- Proyectos
- Experiencia
- Certificaciones
- Enlaces de contacto

## Deploy en Vercel

1. Subir el proyecto a GitHub.
2. Importar el repositorio desde Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Deploy en GitHub Pages

El proyecto incluye `gh-pages`. Para publicar:

```bash
npm run deploy:pages
```

Si el repositorio no se llama `Portafolio`, cambia el `base` en `vite.config.ts`.

## Estructura

```txt
src/
  components/
    ui/
  data/
  lib/
  sections/
  styles/
public/
```

## Nota

Actualiza los enlaces reales de LinkedIn, GitHub, correo y CV antes de publicar. El formulario de contacto usa `mailto`, por lo que no necesita backend.
