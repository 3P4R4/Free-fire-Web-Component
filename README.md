# web-component-ecommerce

Web Component para tarjetas estilizadas de ecommerce.

## Instalación

```bash
npm install web-component-ecommerce
```

## Uso
Importa el custom element:

```js
import "web-component-ecommerce";
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
+ rgb - Activa efecto de gradiente
+ coleccion - Colección del item
+ contenido - Descripción corta
+ alturaImg - Altura de la imagen

## Descripción
Web component desarrollado con Vanilla JS para crear tarjetas de productos estilizadas, como las de ecommerce. Permite mostrar una imagen destacada, info del producto y efectos al hover.

## Características
+ Diseño responsive para desktop y mobile
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

1.- Clonar repositorio 

2.- Ejecutar 
```bash 
npm install
```
3.- Realizar cambios y crear PR