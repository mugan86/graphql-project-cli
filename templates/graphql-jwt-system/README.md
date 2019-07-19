# Sistema de login / registro con JWT en GraphQL con MongoDB

En este proyecto vamos a aprender como crear un sistema para registro de usuarios haciendo uso de JWT y con ello vamos a conseguir también el inicio de sesión para obtener el token que nos servirá para autenticarnos en GraphQL.

## Requerimientos

* Node v10.16.0 o más.
* NPM v6.0.0 o más
* MongoDB instalado y en marcha.

## Intrucciones de uso

### Clonar el repositorio / descargar.
```git clone https://github.com/graphql-course/3-jwt-login-register-graphql.git```

### Instalar las dependencias de NPM
```npm install```

### Crear el fichero de variables de entorno
Creamos el fichero .env dentro del directorio "src"
```
PORT=<numero-puerto>
SECRET=<PALABRA_SECRETA>
DATABASE=mongodb://localhost:27017/<base-de-datos>
```

### Iniciar en debug
```npm run start:dev```