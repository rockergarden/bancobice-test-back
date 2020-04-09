# BANCOBICE-TEST-BACK
  

## Instalación

Este es el backend para la prueba técnica del proceso de selección, las tecnologías utilizadas son:

  

**-. Node JS 12**
**-. dotenv**
**-. Mocha**
**-. Chai**

  

Node se debe descargar desde [https://nodejs.org/es/download/](https://nodejs.org/es/download/).

Dotenv se debe instalar después de haber instalado correctamente node desde el terminal o linea de comandos con el comando: **"npm install dotenv"**.

Para los test se debe instalar Mocha, Chai y Chai-http con el comando **"npm install mocha chai chai-http"**.

Se debe clonar el repositorio y una vez clonado se debe ejecutar el comando **"npm install"** desde el terminal o linea de comandos para instalar las dependencias del proyecto.

Una vez instaladas las dependencias de forma correcta se debe ejecutar el comando **node server.js** desde el terminal o linea de comandos para ejecutar.

## Tests
Los Test se ejecutan con el comando **"npm test"**, los test ejecutados verifican si los servicios responden con status 200 cuando la respuesta es correcta o con status 404 cuando no tienen respuesta.

## Servidor de pruebas

Una vez ejecutado se debe entrar a la url: [http://localhost:3000/](http://localhost:3000/) y una vez desde ahí se puede entrar a la aplicación.

El backend responde en la url http://localhost:3000/get_last para obtener la lista completa de indicadores diarios y a http://localhost:3000/get_detail/?key=<indicador> para ver el detalle de cada indicador.