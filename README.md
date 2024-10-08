
# Dragon Ball App (Prueba tecnica para Dazlabs)

En este sitio vas a poder ver informacion sobre muchos personajes de todo el universo de dragon ball, incluyendo derivados como transformaciones y planetas.

## EL SITIO CUENTA CON LAS SIGUIENTES APARTADOS:

1 Vista de todos los personajes con sus opciones de eliminacion(si eliminas un personaje se eliminan sus transformaciones en cascada) y edicion.

2 Vista de todas las transformaciones con sus opciones de eliminacion y edicion.

3 Vista de todos los planetas con sus opciones de eliminacion y edicion.

4 Vista de detalle de los personajes, transformaciones y planetas.

5 Opcion para crear un personaje al cual se le pasa su planeta(si quieres utilizar un planeta existente solo debes dar el nombre de ese planeta) y sus transformaciones.

6 Barra de navegacion con modo oscuro.

7 Documentacion en swagger.

8 Implementacion de alertas para mejor experiencia de usuario

## Entorno local frontend:

- Para levantar el proyecto frontend situate en su carpeta raiz (/frontend) e ingresa este comando en la terminal.
```bash
  npm run dev
```


## Variables de entorno Front

Para correr este proyecto debes añadir estas variables a tu archivo .env.local

`NEXT_PUBLIC_API_CHARACTERS= Endpoint para characters (personajes) http://localhost:PUERTO/api/characters`

`NEXT_PUBLIC_API_PLANETS= Endpoint para planets (planetas) http://localhost:PUERTO/api/planets`

`NEXT_PUBLIC_API_TRANSFORMATIONS= Endpoint para transformations (transformations) http://localhost:PUERTO/api/transformations`


## Entorno local backend:

- Para levantar el proyecto frontend situate en su carpeta raiz (/backend) e ingresa este comando en la terminal
```bash
  npm start
```
## Variables de entorno Back

Para correr este proyecto debes añadir estas variables a tu archivo .env

`PORT= Puerto en el cual deseas que corra el servidor` 

`MONGO_DB_URI= URI para conectarte a la DB de MongoDB`

`SERVER_URL= URL del servidor ejemplo: http://localhost:3001`

## Caracteristicas
- Realizado mediante Express, Next.js 14 y typescript.
- Estilos realizados con Tailwind CSS, y librerias de estilos como shadcn/ui.
- Buenas practicas de programacion.
- Use client para componentes renderizados del lado del cliente.
- Ruteo basado en archivos de Next.js 14.
- MongoDB para una base de datos flexible.
- Mongoose y typescript para mayor robustes.\
- Documentacion de los endpoints realizada con swagger

  
## Documentacion
- Documentacion realizada con swagger, para entrar a la UI de la documentacion debes escribir la URL del servidor y /api-docs

```bash
  http://localhost:PUERTO/api-docs
```
  





