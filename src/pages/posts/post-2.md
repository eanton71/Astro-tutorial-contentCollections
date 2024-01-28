---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'Blog con Astro 2ª parte'
pubDate: 2022-08-01
description: 'Segunda publicación de mi nuevo blog Astro.'
author: 'Enrique'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
tags: ["astro", "blog", "tutorial"]
---

Necesario:
- [ ] Control de versiones y hosting,  Github: https://github.com/
- [ ] Netlify: https://www.netlify.com/
- [ ] Terminal para ejecutar comandos: bash, zsh, cmd, powershell
- [ ] Node.js: https://nodejs.org/
- [ ] Editor de codigo: Visual Studio Code: https://code.visualstudio.com/

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

## Edición y subida al servidor

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

## Nuevas paginas y sus correspondientes enlaces
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
### Paginas en Markdown

Crear una carpeta nueva `src/pages/posts/` (dentro de la carpeta pages).
Crear dos nuevos aerchivos: post-1.md y post-2.md dentro de esta carpeta
Le añadimos contenido a los archivos
```markdown
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
# Mi primera publicación en el blog

Publicado el: 2022-07-01

¡Bienvenido a mi _nuevo blog_ sobre el aprendizaje de Astro! Aquí, voy a compartir mi viaje de aprendizaje a medida que construyo un nuevo sitio web.

## Lo que he conseguido

1. **Instalación de Astro**: En primer lugar, he creado un nuevo proyecto Astro y configurar mis cuentas en línea.

2. **Creación de páginas**: Luego aprendí cómo hacer páginas creando nuevos archivos `.astro` y colocándolos en la carpeta `src/pages/`.

3. **Creación de publicaciones**: ¡Esta es mi primera publicación! ¡Ahora tengo páginas de Astro y publicaciónes en Markdown!

## Próximos pasos

Terminaré el tutorial de Astro, y luego seguiré añadiendo más publicaciones. Mira este espacio para más por venir.
```

Si vamos a `http://localhost:4321/posts/post-1`se deberia mostrar el contenido de esta pagina. Si vamos a otra pagina que no este creada , por ejemplo `http://localhost:4321/posts/post-3`, se muestra un mensaje de error `404`.
> En la parte superior, entre las marcas `---``---`se encuentra el `frontmatter`. Incluye información para uso de `Astro`. [frontmatter YAML](https://assemble.io/docs/YAML-front-matter.html)


Enlazamos las publicaciones nuevas en la pagina `blog.astro`
```html
---
---
<html lang="es">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    <a href="/">Inicio</a>
    <a href="/about/">Sobre mi</a>
    <a href="/blog/">Blog</a>

    <h1>Mi blog de Astro aprendizaje</h1>
    <p>Aquí es donde publicaré acerca de mi viaje aprendiendo Astro.</p>
    <ul>
      <li><a href="/posts/post-1/">Publicación 1</a></li>
      <li><a href="/posts/post-2/">Publicación 2</a></li>
      <li><a href="/posts/post-3/">Publicación 3</a></li>
    </ul>
  </body>
</html>
```
[Markdown Cheat Sheet de The Markdown Guide](https://www.markdownguide.org/cheat-sheet/)[¿Qué son las herramientas para desarrolladores de navegadores? MDN](https://developer.mozilla.org/es/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)

## Contenido dinamico

### Variables

Añadimos una nueva linea en el frontmatter de la pagina about.astro.
```html
---
const pageTitle = "Sobre mi";
---
,,,,
<title>{pageTitle}</title>
,,,,

```
> Las variables se definen mediante Javascript o Typescript. Se usan dentro de `{}`para que Astro entienda que es código Javascript. El frontmatter solo contiene Javascript. En la parte de html de la plantilla el codigo Javascript siempre ira anidado entre corchetes`{}`. Hay similitudes con JSX (React) - [Comparación entre la sintaxis Astro y JSX](https://docs.astro.build/es/core-concepts/astro-syntax/#diferencias-entre-astro-y-jsx)

Añadimos mas variables a la pagina about y mas contenido donde usarlas:
```javascript
---
const pageTitle = "Sobre mi";

const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Escritor técnico",
  hobbies: ["fotografia", "observación de aves", "peñarol"],
};

const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Redacción de documentos"];
---
```
```html
<p>He aquí algunos datos sobre mí:</p>
<ul>
  <li>Me llamo {identity.firstName}.</li>
  <li>Vivo en {identity.country} y trabajo como {identity.occupation}.</li>
  {identity.hobbies.length >= 2 &&
    <li>Dos de mis aficiones son: {identity.hobbies[0]} y {identity.hobbies[1]}</li>
  }
</ul>
<p>Mis habilidades son:</p>
<ul>
  {skills.map((skill) => <li>{skill}</li>)}
</ul>
```


### Renderizado condicional

Añadir en el frontmatter de about.astro:
```javascript
const happy = true;
const finished = false;
const goal = 3;

---
```
y en la parte html:
```html
{happy && <p>¡Estoy feliz de aprender Astro!</p>}
{finished && <p>¡He terminado este tutorial!</p>}
{goal === 3 ? <p>Mi objetivo es terminar en 3 días.</p> : <p>Mi objetivo no son 3 días.</p>}
```
 [Expresiones dinámicas en Astro](https://docs.astro.build/es/core-concepts/astro-syntax/#expresiones-similares-a-jsx)

## Añadir estilos

Añadir `<style>`en la cabecera de about.astro
```html
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{pageTitle}</title>
    <style>
      h1 {
        color: purple;
        font-size: 4rem;
      }
    </style>
  </head>
  ```
  
Ahora el elemento H1 de la pagina about.astro se mostrara de color purpura y con tamaño 4rem 
https://developer.mozilla.org/es/docs/ Learn/ CSS/Building_blocks/Values_and_units

Añadimos una clase  a la variable skills
```html
<p>Mis habilidades son:</p>
<ul>
  {skills.map((skill) => <li class="skill">{skill}</li>)}
</ul>
```
. Esto le dara color verde y fuente en negrita a los elementos del string skills
```html
<style>
  h1 {
    color: purple;
    font-size: 4rem;
  }
  .skill {
    color: green;
    font-weight: bold;
  }
</style>
```

### Variables css
Añadimos al frontmatter unas variables nuevas.
```javascript
const skillColor = "navy
const fontWeight = "normal";
const textCase = "capitalize";
---
```

Las colocamos entre llaves dobles en define:vars.  Ahora los elementos del array de strings skills se mostraran e color navy con fuente bold y todo el texo. en mayusculasmayusculas. 
```html
<style define:vars={{skillColor,fontWeight,textCase}}>
  h1 {
    color: purple;
    font-size: 4rem;
  }
  .skill {
    color: green;
    color: var(--skillColor);
    font-weight: var(--fontWeight);
	text-transform: var(--textCase);
  }
</style>
```

- [Etiqueta Astro `<style>`.](https://docs.astro.build/es/guides/styling/#estilando-en-astro)
- - [Variables CSS en Astro](https://docs.astro.build/es/guides/styling/#variables-de-css)

### Hojas de estilo

La etiqueta `<style>`solo afecta a la pagina en la que esta. Hay que crear un achivo css para añadir estilos globales.
Creamos un archivo `global.css` en la carpeta `src/styles/`.
```css
html {
  background-color: #f1f5f9;
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: 100%;
  max-width: 80ch;
  padding: 1rem;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

h1 {
  margin: 1rem 0;
  font-size: 2.5rem;
}
```
Lo importamos en about.astro
```javascript
---
import '../styles/global.css';
```
> Se tiene en cuenta los estilos de la hoja de estilos y de la etiqueta `<style>`. Si hay confictos tiene preferencia los estilos locales (`<style>`)

## Componentes

Archivos  con html reutilizable en otras paginas astro. Util para eliminar código duplicado. Creamos la carpeta `src/components/` para guardar los componentes. 
### Navigation
Creamos un componrente Navigatios.astro
```html
---
---
<a href="/">Inicio</a>
<a href="/about/">Sobre mi</a>
<a href="/blog/">Blog</a>
```
importamos el componente en el frontmatter de la pagina donde lo queramos incluir
```javascript
---
import Navigation from '../components/Navigation.astro';
```
y se sustituye el codigo que se quiera reemplazar por la declaracion del nuevo componente
```html
<body>

<a href="/">Inicio</a>
<a href="/about/">Sobre mi</a>
<a href="/blog/">Blog</a>

```

Se hace esto en todas las pagians que compartan el codigo a reemplazar. 
```html
<Navigation />
```

> Refactorizar: mejorar el codigo sin cambiar la apariemcia ni el comporatamiento de la pagina [Refactorización](https://refactoring.com/)

- [Visión general de los componentes Astro](https://docs.astro.build/es/core-concepts/astro-components/)

### Pie de pagina

Creamos un componente Pi de pagina
```html
---
const platform = "github";
const username = "withastro";
---

<footer>
  <p>¡Más información sobre mis proyectos en <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!</p>
</footer>
```
Lo importamos y lo declaramos en todas laspaginas. 
```javascript
import Footer from '../components/Footer.astro';
```

```html
	<Footer />
</body>
```

### Pasar variables a un componente (props)

```html
---
const { platform, username } = Astro.props;
---
<a href={`https://www.${platform}.com/${username}`}>{platform}</a>

<style>
  a {
    padding: 0.5rem 1rem;
    color: white;
    background-color: #4c1d95;
    text-decoration: none;
  }
</style>
```

> props en Astro - [Componentes props en Astro](https://docs.astro.build/es/core-concepts/astro-components/#props-de-componentes)  En el frontmatter del componente se declaran las variables props y en el cuerpo html como se utilizan . Cuando se declaran se le pasa el contenido a cada variable. Se les puede dar valor predeterminado por si no se le da valor en la declaracion. 
```html
---
const platform = "github";
const username = "withastro";
import Social from './Social.astro';
---

<footer>
  <p>¡Más información sobre mis proyectos en <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!</p>
  <Social platform="twitter" username="astrodotbuild" />
  <Social platform="github" username="withastro" />
  <Social platform="youtube" username="astrodotbuild" />
</footer>
```

### Componente dentro de otro componente

Creamos un nuevo componente Header.astro que contenga dentro el componente Navigation. Después lo importamos y declaramos en cada pagina
```html
---
import Navigation from './Navigation.astro';
---
<header>
  <nav>
    <Navigation />
  </nav>
</header>
```

## Responsive (tamaños de pantalla diferentes)
Actualizamos el estilo para que se vea bien en todos los dispositivos. Le damos una clase al componente Navigation.astro
```html
---
---
<div class="nav-links">
  <a href="/">Inicio</a>
  <a href="/about">Sobre mi</a>
  <a href="/blog">Blog</a>
</div>
```

Añadimos los estilos de la nueva clase a global.css
```css
,,,
/* estilos de la barra de navegación*/

.nav-links {
  width: 100%;
  top: 5rem;
  left: 48px;
  background-color: #ff9776;
  display: none;
  margin: 0;
}

.nav-links a {
  display: block;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-links a:hover,
.nav-links a:focus {
  background-color: #ff9776;
}

.expanded {
  display: unset;
}

@media screen and (min-width: 636px) {
  .nav-links {
    margin-left: 5em;
    display: block;
    position: static;
    width: auto;
    background: none;
  }

  .nav-links a {
    display: inline-block;
    padding: 15px 20px;
  }

}
```

> @media en css: tiene en cuenta el tamaño de la pantalla para dar un estilo u otro

-  [Diseño basado en componentes](https://www.droptica.com/blog/component-based-design/) 
-  [Etiquetas HTML semánticas](https://www.dofactory.com/html/semantics) 
- [Diseño Mobile-first](https://www.mobileapps.com/blog/mobile-first-design) 

### Menu hamburguesa para moviles

Creamos un componente Hamburguer.astro. Se mostrara como en los moviles como un icono de tres rayas, una encima de otra
```html
---
---
<div class="hamburger">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</div>
```
Lo declaramos en el componente de cabecera `Header.astro`
```html
---
import Navigation from "./Navigation.astro";
import Hamburguer from "./Hamburguer.astro";
---

<header>
  <nav>
    <Hamburguer />
    <Navigation />
  </nav>
</header>
```

Y añadimos nuevos estilos para el nuevo compnente Hamburguer en la hoja `global.css`.

```css
/* estilos de la barra de navegación*/
 
.hamburger {
  padding-right: 20px;
  cursor: pointer;
}

.hamburger .line {
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 10px;
  background-color: #ff9776;
}
 
.nav-links {
  width: 100%;
  top: 5rem;
  left: 48px;
  background-color: #ff9776;
  display: none;
  margin: 0;
}

.nav-links a {
  display: block;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-links a:hover, a:focus {
  background-color: #ff9776;
}

.expanded {
  display: unset;
}

@media screen and (min-width: 636px) {
  .nav-links {
    margin-left: 5em;
    display: block;
    position: static;
    width: auto;
    background: none;
  }

  .nav-links a {
    display: inline-block;
    padding: 15px 20px;
  }

  .hamburger {
    display: none;
  }
}
```

### Scripts

Necesitamos añadir un script para dar interactividad al encabezado. Lo hacemos mediante la etiqueta `<script>` que pondremos en index.astro. Se puede añadir el codigo dentro o incluir un enlace a un archivo js

```html
  <Footer />
  <script>
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('expanded');
    });
  </script>
</body>
```
 Otra opcion
/src/scripts/menu.js
```javascript
 document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});
```
index.astro
```html
  <Footer /> 
    import "../scripts/menu.js";
  </script>
</body>
```
Hacemos el import tambien en about y blog.

> Hasta ahora se ha usado Javascript para definir partes de la pagina de forma dinamica. Se creaba la pagina segun las variables y se enviaba compilada al navegador . Ahora tambien se envia código Javascript que se ejecutara desde el navegador segun interactúe el usuario.   [Scripts del lado del cliente en Astro](https://docs.astro.build/es/guides/client-side-scripts/)


## Plantillas
Aun podemos refactorizar mas código repetido.

Creamos una carpeta `/src/layouts/`y un archivo `BaseLayout.astro`.
Copiamos todo el contenido de index.astro en el nuevo archivo BaseLayout.astro. Y en `index.astro`modificamos el contenido asi:
```html
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Página de inicio";
---
<BaseLayout>
  <h2>Mi impresionante subtítulo del blog</h2>
</BaseLayout>
```
Para que el contenido de index cambie debemos añadir el elemento `<slot />` en BaseLayout.astro, donde queremos colocar el html adicional (h2 - [`<slot />` de Astro](https://docs.astro.build/es/core-concepts/astro-components/#slots). Esta etiqueta permite inyectar contenido hijo dentro de cualquier Componente. 

```html
  <body>
    <Header />
    <h1>{pageTitle}</h1>
    <slot />
    <Footer />
    <script>
      import "../scripts/menu.js";
    </script>
  </body>
```
### Props para personalizar la pagina

Le podemos pasar props a la declaracion de la platilla para personalizarla. Le psamos pageTitle para poner el titulo de la pagina que queramos. 
```html
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Página de inicio";
---
<BaseLayout pageTitle={pageTitle}>
  <h2>Mi impresionante subtítulo del blog</h2>
</BaseLayout>
```
En la definicion de la plantilla definimos pageTitle como prop. 
```javascript
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css'; 
const { pageTitle } = Astro.props;
---
```
Refactoizamos las otras paginas, about y blog

### Plantillas para archivos markdown
Creamos una nuevo archivo `src/layouts/MarkdownPostLayout.astro`
```html
---
const { frontmatter } = Astro.props;
---

<h1>{frontmatter.title}</h1>
<p>{frontmatter.pubDate.slice(0, 10)}</p>
<p><em>{frontmatter.description}</em></p>
<p>Escrito por: {frontmatter.author}</p>
<img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
<slot />

```

Incluimos la siguiente propiedad en el forntmatter de cada publicacion del blog.
```javascript
---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'Mi primera publicación en el blog'
pubDate: 2022-07-01
description: 'Este es la primera publicación de mi nuevo blog Astro.'
author: 'Alumno de Astro'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
tags: ["astro", "bloguear", "aprender en público"]
---
# Mi primera publicación en el blog
```
En el archivo md se tendra en cuenta las variables que estan declaradasen el forntmatter y cuya disposicion se declara en `MarkdownPostLayout.astro`.

- [Plantillas de Markdown en Astro](https://docs.astro.build/es/guides/markdown-content/#layout-en-el-frontmatter)
    
- [Props de plantilla para Markdown](https://docs.astro.build/es/core-concepts/layouts/#props-de-plantillas-markdown)
    
- [Introduccion a YAML](https://dev.to/paulasantamaria/introduction-to-yaml-125f) externo

### Combinar plantillas


https://docs.astro.build/
[FreeCodeCamp.org](https://freecodecamp.org/)
