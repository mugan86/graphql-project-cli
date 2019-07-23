## Generador de proyectos NPM

Este generador servirá para crear proyectos de GraphQL con diferentes variantes con el objetivo de agilizar el proceso de crear el proyecto sin tener que hacer todos los pasos iniciales una y otra vez.

# Requirements
* Node >= 10.15.3
* NPM >= 6.0.0

# Proyectos

## Hola Mundo sin variables de entorno

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración más básica
```graphql-hello-world```

## Hola Mundo con configuración de la base de datos MongoDB

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración de la base de datos MongoDB disponible para poder trabajar con bases de datos sin tener que hacer el proceso de configuración paso a paso
```graphql-hello-world-db```

## Hola Mundo con variables de entorno

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración más básica. Es el mismo ejemplo que el anterior pero en este caso ya tenemos configurado el apartado de las variables de entorno para poder añadirlas en el proyecto con el fichero .env (hay que crearlo)
```graphql-hello-world-with-env```

## Sistema de Login / Registro con JWT

Ejemplo en el que tenemos un simple servidor GraphQL con la gestión de registro de usuarios, login, visualización de lista de usuarios y autenticación mediante tokens de JWT
```graphql-jwt-system```

# Install
```npm install -g mugan86/graphql-project-cli```
# Usage
Ejecutamos esta orden
```graphql-anartz```

# Example
![CLI](./cli.gif)
