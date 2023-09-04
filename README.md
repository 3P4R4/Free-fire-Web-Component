# web-component-ff

Web Component de uso multiporposito alusivo a Free Fire

## Instalación

```bash
npm install web-component-ff --save
```

## Uso
Importa el custom element:

```js
import {FreeFireCard} from 'web-component-ff';
```

## Usa el tag ```<mlz-ff>```:

```js
<mlz-ff
  titulo="Laura" //custom attribute
  img="./img.png" //custom attribute
  /* ...demás atributos */
>  
</mlz-ff>
```
## Atributos
+ titulo - Titulo de la tarjeta
+ img - Imagen destacada
+ movil - Imagen para vista movil
+ rgb - Activa efecto de gradiente (opcional)
+ coleccion - Colección del item
+ contenido - Descripción corta
+ alturaImg - Altura de la imagen

## Atributos efecto Tilt
**Para los atributos del efecto tilt puedes buscar mas en** [https://gijsroge.github.io/tilt.js/](https://gijsroge.github.io/tilt.js/)

## Descripción
Web component desarrollado con Vanilla JS para crear una tarjeta multiproposito alusivo a Free Fire. Permite mostrar una imagen destacada, titulo, sub-titulo, info del producto, botón de ver más y efectos hover, marca de agua de fondo; incluso puedes variar en la imagen principal en modo pc y modo movil.

## Características
+ Diseño responsive para desktop y movil
+ cambiar de imagen principal para desktop y movil
+ Efecto hover con VanillaTilt.js
+ Soporte para Web Components nativos
+ Fácil personalización cambiando los atributos
+ Estilos encapsulados en Shadow DOM
+ Dependencias
+ vanilla-tilt: para el efecto hover 3D

## Desarrollo
Desarrollado con:

+ JavaScript vanila (ES6 modules)
+ HTMLTemplates
+ Shadow DOM
+ Custom Elements

## Para contribuir:

Crea un fork y contribuye

[https://github.com/mendozalz/Free-fire-Web-Component](https://github.com/mendozalz/Free-fire-Web-Component)


1.- Clonar repositorio 

2.- Ejecutar 
```bash 
npm install
```
3.- Realizar cambios y crear PR