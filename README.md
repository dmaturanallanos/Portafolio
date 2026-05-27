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

Opcion recomendada por simpleza y buen soporte para React/Vite.

1. Subir el proyecto a GitHub.
2. Importar el repositorio desde Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

URL gratuita esperada:

```txt
https://tu-proyecto.vercel.app
```

## Deploy en Netlify

Opcion gratuita muy simple para portfolios estaticos.

1. Subir el proyecto a GitHub.
2. Entrar a Netlify y elegir `Add new site`.
3. Conectar el repositorio.
4. Build command: `npm run build`.
5. Publish directory: `dist`.

URL gratuita esperada:

```txt
https://tu-proyecto.netlify.app
```

## Deploy en GitHub Pages

El proyecto incluye `gh-pages`. Para publicar:

```bash
npm run deploy:pages
```

Si el repositorio no se llama `Portafolio`, cambia el `base` en `vite.config.ts`.

## Deploy en Cloudflare Pages

Opcion gratuita rapida y estable para sitios estaticos.

1. Subir el proyecto a GitHub.
2. Entrar a Cloudflare Pages.
3. Crear proyecto desde repositorio.
4. Framework preset: `Vite`.
5. Build command: `npm run build`.
6. Build output directory: `dist`.

URL gratuita esperada:

```txt
https://tu-proyecto.pages.dev
```

## Conectar con LinkedIn

Cuando el sitio este publicado:

1. Copia la URL publica del portafolio.
2. En LinkedIn, entra a `Perfil`.
3. Abre `Informacion de contacto`.
4. Agrega la URL en `Sitio web`.
5. En `Destacado`, agrega el enlace del portafolio como proyecto principal.
6. En `Acerca de`, agrega una linea breve:

```txt
Portafolio profesional: https://tu-url-publica
```

Tambien conviene agregar el enlace en:

- GitHub profile README
- CV PDF
- Firma de correo
- WhatsApp Business o mensaje de presentacion laboral

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
