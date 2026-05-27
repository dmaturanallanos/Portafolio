# Publicar el portafolio gratis

Estas son las mejores opciones gratuitas para subir el portafolio a internet y usarlo en LinkedIn, CV y postulaciones.

## 1. Vercel

Recomendado para este proyecto.

- Plan gratis suficiente para portafolio personal.
- Detecta Vite automaticamente.
- Deploy automatico cada vez que subes cambios a GitHub.

Configuracion:

```txt
Framework: Vite
Build command: npm run build
Output directory: dist
```

## 2. Netlify

Muy buena opcion para portfolios y landing pages.

Configuracion:

```txt
Build command: npm run build
Publish directory: dist
```

## 3. GitHub Pages

Gratis y directo si quieres mantener todo dentro de GitHub.

Comando incluido:

```bash
npm run deploy:pages
```

Si cambias el nombre del repositorio, revisa `vite.config.ts`.

## 4. Cloudflare Pages

Gratis, rapido y estable para sitios estaticos.

Configuracion:

```txt
Framework: Vite
Build command: npm run build
Output directory: dist
```

## Recomendacion

Para buscar trabajo, usa Vercel o Netlify primero. Son rapidos, faciles de compartir y se ven profesionales con subdominio gratuito.

## Conectar el portafolio a LinkedIn

1. Publica el sitio.
2. Copia la URL final.
3. En LinkedIn, entra a tu perfil.
4. Agrega la URL en `Informacion de contacto`.
5. Agrega el enlace en la seccion `Destacado`.
6. Agrega el enlace al CV.

Texto sugerido para LinkedIn:

```txt
Portafolio profesional TI: soporte tecnico, desarrollo web, bases de datos y ciberseguridad.
https://tu-url-publica
```

## Checklist antes de publicar

- Revisar correo, telefono, LinkedIn y GitHub.
- Confirmar que el CV descarga correctamente.
- Confirmar que los proyectos abren en una pestaña nueva.
- Ejecutar `npm run build`.
- Probar el sitio en celular.
