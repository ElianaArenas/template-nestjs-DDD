# Para usar el template

> Comienzas a escribir tu codigo dentro de la carpeta
> src/domain/services creando un archivo
> 
> Busca en el IDE "CHECK_ROUTE" o revisa la ruta
> src/application/middlewares/logger.middleware.ts
> y ajusta la ruta real de tu servicio para evitar
> producir logs innecesarios
> 
> Revisa [LogsBX](https://bxpress.atlassian.net/l/cp/AUtwrwj0) para definir los logs
> 
> Revisa [customLog](https://bxpress.atlassian.net/wiki/spaces/~71202045f9699421d44ecb824f15c4a139d12f/pages/910196761/Como+usar+customLog?atlOrigin=eyJpIjoiNzVmODE2YTI1NDAxNDY0MzhkNDU1MjVlY2ViYmRmOTMiLCJwIjoiYyJ9) para implementar los logs
> 
> Al terminar el setting up del template, borra esta parte del readme
> y completa la info necesaria (y que aplique) para tu repo
> 
> TODO: ¿Como configurar mongo?
> 
> TODO: ¿Como configurar kafka?
> 
> TODO: ¿Como configurar oracle?
> 

# Titulo del repo o del producto

[Descripción general del producto]

## Documentación
BX Confluence: [enlace de confluence del producto]

## Logs
[Development](agregar_link_datadog) - [Staging](agregar_link_datadog) - [Production](agregar_link_datadog)

## Funcionalidades internas

[Agregar una descripción de las principales fucniones/metodos del servicio]

### Getting start
```
npm install
```
copiar y renombrar .env.template hacia .env y rellenar con los parametros necesarios.

### Correr el proyecto
```
# Development mode
 	$ npm run start
	
# Watch mode
    $ npm run start:dev
	
# Production mode
   	$ npm run start:prod
   
```

### Deploy
La implementación en el entorno de desarrollo y qa se activa mediante github actions cuando realizan los push o merge con las rama de desarrollo (development) o qa (staging).

### API
[Escribir la documentación asociada o referencia del confluence]

### General y consideraciones

[agregar consideraciones]

