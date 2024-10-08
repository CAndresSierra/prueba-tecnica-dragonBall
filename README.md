
# Dragon Ball App (Prueba tecnica para Dazlabs)

En este sitio vas a poder ver informacion sobre muchos personajes de todo el universo de dragon ball, incluyendo derivados como transformaciones y planetas.

## EL SITIO CUENTA CON LAS SIGUIENTES APARTADOS:

- Vista de todos los personajes con sus opciones de eliminacion(si eliminas un personaje se eliminan sus transformaciones en cascada) y edicion.
- Vista de todas las transformaciones con sus opciones de eliminacion y edicion.
- Vista de todos los planetas con sus opciones de eliminacion y edicion.
- Vista de detalle de los personajes, transformaciones y planetas.
- Opcion para crear un personaje al cual se le pasa su planeta(si quieres utilizar un planeta existente solo debes dar el nombre de ese planeta) y sus transformaciones.
- Barra de navegacion con modo oscuro.
- Documentacion en swagger.

## Entorno local frontend:

- Para levantar el proyecto frontend situate en su carpeta raiz (/frontend) e ingresa este comando en la terminal.
```bash
  npm run dev
```


## Variables de entorno Front

Para correr este proyecto debes añadir estas variables a tu archivo .env.development

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





