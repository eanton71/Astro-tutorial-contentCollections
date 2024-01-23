---
title: 'Mi primera publicación en el blog'
pubDate: 2022-07-01
description: 'Este es la primera publicación de mi nuevo blog Astro.'
author: 'Alumno de Astro'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
tags: ["astro", "bloguear", "aprender en público"]
---
# Blog con Astro
Necesario:
-   Control de versiones y hosting,  Github: https://github.com/
-  Netlify: https://www.netlify.com/
-  Terminal para ejecutar comandos: bash, zsh, cmd, powershell
-   Node.js: https://nodejs.org/
-  Editor de codigo: Visual Studio Code: https://code.visualstudio.com/

## Crear un nuevo proyecto en terminal
Usar npm, pnpm o yarn 
- nombre del directorio: blog
- template (plantilla): Empty
- dependencias? si
- ts (Typescript)? no
- git? si

```zsh
> pnpm create astro@latest 
   dir   Where should we create your new project?
         ./blog

  tmpl   How would you like to start your new project?
         Empty

  deps   Install dependencies?
         Yes

    ts   Do you plan to write TypeScript?
         No
      ◼  No worries! TypeScript is supported in Astro by default,
         but you are free to continue writing JavaScript instead.

   git   Initialize a new git repository?
         Yes

      ✔  Project initialized!
         ■ Template copied
         ■ Dependencies installed
         ■ Git initialized

  next   Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./blog 
         Run pnpm dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```
Abrir el proyecto en Visual Studio Code y abrir un terminal en el editor. Opcional: instalar una extensión para Astro [Astro language support extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode). 

Iniciar el servidor de desarrollo:
```zsh
pnpm run dev
```
Se iniciara en http://localhost:4321/ por defecto.

## Editar pagina de inicio

```zsh
src/pages/index.astro
```
``
```html
---
---

<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} >
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
  </body>
</html>

```
### Subir proyecto a Github

Si el acceso a Github esa habilitado en VSCode, se creara un repositorio con el nombre del proyecto en la cuenta de Gthub a la que se tiene acceso. Se puede ver en el boton a la izquierda `Control de codogo fuente` .
Otra opción crear repositorio en Github. 
Instalar Git si es necesario en VSCode
En Control de código fuente `... > Remoto > Añadir` . Autenticarse en Github
Se muestra una pestaña en la parte superior. si se hace clic se muestran los repositorios de tu cuenta. Buscar el que queremos.
Publicar los cambios (requiere colocar un mensaje)
PONER EXPLICACION DE GITHUB CON VSCOde
[Usando el control de Git Source en VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview#_git-support)

### Subir al hosting

Crear una cuenta en  Netlify y subir el proyecto desde Github
[Guía paso a paso para desplegar en Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

## Crear mas paginas y sus correspondientes enlaces
Crear dos paginas  `about.astro`y `blog.astro` poner los enlaces en cada una de las paginas:
```html
  <body>
    <a href="/">Inicio</a>
    <a href="/about/">Sobre mi</a>
    <a href="/blog/">Blog</a>
    ,,,
```
Astro utiliza html. Se usan  enlaces `<a>` . Se carga toda la pagina cada vez que se le da a un enlace. No hay componentes especificos para el enrutamiento. 
https://docs.astro.build/es/core-concepts/astro-pages/#enrutamiento-basado-en-archivos
https://docs.astro.build/es/core-concepts/routing/
- [Páginas de Astro HTML](https://docs.astro.build/es/core-concepts/astro-pages/#p%C3%A1ginas-de-astro)
Confirmar los cambios en Control de codigo fuente. Se deberian ver pronto en Netlify. 
### Crear paginas en Markdown
Crear un nuevodirectorio: `src/pages/posts/`
Añadir un archi `post-1.md`
https://docs.astro.build/
[FreeCodeCamp.org](https://freecodecamp.org/)
