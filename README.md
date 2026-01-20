# Prueba Técnica – Consumo de API GitHub

## Descripción
Aplicación sencilla que consume la API pública de GitHub utilizando autenticación por **Personal Access Token**.

La aplicación:
- Consulta la información del usuario autenticado
- Lista sus repositorios públicos
- Muestra datos básicos de cada repositorio (nombre y estrellas)

La aplicación está desarrollada en **Node.js** utilizando **Express** para exponer endpoints que consumen la API pública de GitHub.  
La autenticación se realiza mediante un **Personal Access Token**, el cual se lee desde variables de entorno para mantener la seguridad.

El backend consulta la información del usuario autenticado y sus repositorios públicos utilizando la **GitHub REST API** y procesa los datos obtenidos.

El frontend es una interfaz simple en **HTML, JavaScript y CSS**, servida desde el mismo backend, que consume los endpoints expuestos y muestra el nombre del usuario, la cantidad de repositorios y la lista de repositorios con su número de estrellas.

---

## Variables de entorno necesarias
Crear un archivo `.env` (en la raíz del proyecto) con:

```env
GITHUB_TOKEN=ghp_tu_token_aqui
PORT=3000
```

## Ejecución

1. clonar repositorio
``` bash
git clone <url-del-repositorio>
```
2. entrar a proyecto
 ``` bash
cd github-api
```
3.Instalar dependencias
 ``` bash
npm install
```
4. Entrar a la carpeta `src`
``` bash
cd src
```
7.Ejecutar
   ``` bash
node main.js
```

Una vez ejecutado el servidor, abrir un navegador web y acceder a la siguiente URL para visualizar el frontend:
http://localhost:3000

---

