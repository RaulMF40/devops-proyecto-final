## Construcción y despliegue de una imagen Docker en GitHub Actions
Objetivo: Configurar dos Dockerfile para construir una imagen Docker del frontal base y otra del backend base, subir esa imagen a DockerHub, y posteriormente desplegarla temporalmente usando GitHub Actions como parte de un proceso de integración continua.
1. Construcción y subida de la imagen a DockerHub En esta primera parte, deberás crear un Dockerfile que defina cómo se construirán las imágenes de una aplicación simple. Una vez que hayas creado las imágenes de Docker, deberás subirla a DockerHub utilizando tus credenciales de DockerHub.
2. Despliegue temporal de la imagen Docker en GitHub Actions En esta segunda parte del ejercicio, deberás utilizar GitHub Actions para desplegar temporalmente
una de las imágenes que subiste a DockerHub. El objetivo es que GitHub Actions construya y ejecute la imagen Docker como parte de un proceso de integración continua (CI), sin necesidad de mantener activo el servicio después de la ejecución.
--
 - CRISTIAN EN ESTE EJERCICIO DE DOCKER he creado dos dockerfile separados, ya que no sabia si eran microservicios o no, lo he pensado , ya que no especificaba lo de micro, pero de todas maneras lo añadire más adelante para mejorar el proyecto. 

