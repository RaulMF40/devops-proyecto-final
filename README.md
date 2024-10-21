# Proyecto Final Curso DevOps.

## Configuración de GitHub Actions para CI/CD en Fly.io
Objetivo: Configurar un flujo de trabajo (GitHub Actions) que ejecute los tests, construya la
aplicación y la despliegue en Fly.io automáticamente cuando se haga un commit en la rama
deploy-gitactions.
Descripción del ejercicio:
En este ejercicio, vas a configurar GitHub Actions para implementar un flujo de integración
continua (CI) y despliegue continuo (CD) de una aplicación en Fly.io. La aplicación debe
pasar por los siguientes pasos cuando se realice un commit en la rama deploy-gitactions:
1. Ejecución de tests: Antes de desplegar la aplicación, deben ejecutarse los tests para
asegurarse de que todo funciona correctamente.
2. Construcción de la aplicación: Si los tests son exitosos, se construirá la aplicación en
un contenedor Docker.
3. Despliegue en Fly.io: Tras la construcción, la aplicación debe ser desplegada
automáticamente en Fly.io.

--
## Configuración de Jenkins para CI/CD en Fly.io
Objetivo: Configurar un pipeline de Jenkins que ejecute los tests, construya la aplicación y la despliegue en Fly.io automáticamente cuando se haga un commit en la rama deploy-jenkins. Descripción del ejercicio:
- En este ejercicio, vas a configurar un pipeline de jenkins para implementar un flujo de integración continua (CI) y despliegue continuo (CD) de una aplicación en Fly.io. La
aplicación debe pasar por los siguientes pasos cuando se realice un commit en la rama deploy-jenkins:
1. Ejecución de tests: Antes de desplegar la aplicación, deben ejecutarse los tests para
asegurarse de que todo funciona correctamente.
2. Construcción de la aplicación: Si los tests son exitosos, se construirá la aplicación en
un contenedor Docker.
3. Despliegue en Fly.io: Tras la construcción, la aplicación debe ser desplegada
automáticamente en Fly.io.
--
## Construcción y despliegue de una imagen Docker en GitHub Actions
Objetivo: Configurar dos Dockerfile para construir una imagen Docker del frontal base y otra del backend base, subir esa imagen a DockerHub, y posteriormente desplegarla temporalmente usando GitHub Actions como parte de un proceso de integración continua.
1. Construcción y subida de la imagen a DockerHub En esta primera parte, deberás crear un Dockerfile que defina cómo se construirán las imágenes de una aplicación simple. Una vez que hayas creado las imágenes de Docker, deberás subirla a DockerHub utilizando tus credenciales de DockerHub.
2. Despliegue temporal de la imagen Docker en GitHub Actions En esta segunda parte del ejercicio, deberás utilizar GitHub Actions para desplegar temporalmente
una de las imágenes que subiste a DockerHub. El objetivo es que GitHub Actions construya y ejecute la imagen Docker como parte de un proceso de integración continua (CI), sin necesidad de mantener activo el servicio después de la ejecución.
--
## Despliegue de Frontend y Backend con múltiples versiones en Kubernetes
Objetivo: Configurar una estructura en Kubernetes para desplegar un frontend y un backend, cada uno con dos versiones. Se deben crear 3 réplicas de cada versión para
asegurar alta disponibilidad, o al menos 1 réplica si los recursos del sistema son limitados. Las imágenes utilizadas para el frontend y backend deben ser propias, previamente creadas y subidas a DockerHub en el ejercicio anterior de Docker.