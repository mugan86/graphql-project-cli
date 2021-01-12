## Generador de proyectos GraphQL

Este generador servirá para crear proyectos de GraphQL con diferentes variantes con el objetivo de agilizar el proceso de crear el proyecto sin tener que hacer todos los pasos iniciales una y otra vez.

Si algo de lo que habéis visto créeis que os ha sido útil y me queréis apoyar, podéis invitarme a un café:
<br><br><a href="https://www.buymeacoffee.com/mugan86"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mugan86&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

# Requirements
* Node >= 10.15.3
* NPM >= 6.0.0

# Proyectos

## Hola Mundo sin variables de entorno

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración más básica.
```graphql-hello-world```

## Hola Mundo con configuración de la base de datos MongoDB

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración de la base de datos MongoDB disponible para poder trabajar con bases de datos sin tener que hacer el proceso de configuración paso a paso. Simplemente tenemos que ir al fichero **.env** y en la variable de entorno añadimos la referencia de la base de datos correcta.
```graphql-hello-world-db```

## Hola Mundo con variables de entorno

Ejemplo en el que tenemos un simple hola mundo en GraphQL con varios tipos de saludo y con la configuración más básica. Es el mismo ejemplo que el anterior pero en este caso ya tenemos configurado el apartado de las variables de entorno para poder añadirlas en el proyecto con el fichero **.env**
```graphql-hello-world-with-env```

## Sistema de Login / Registro con JWT

Ejemplo en el que tenemos un simple servidor GraphQL con la gestión de registro de usuarios, login, visualización de lista de usuarios y autenticación mediante tokens de JWT. Viene configurado el apartado de la base de datos y la configuración de las variables de entorno para que podamos empezar un proyecto con un sistema de autenticación completa como por ejemplo para crear un chat con usuarios.
```graphql-jwt-system```

# Install
```npm install -g mugan86/graphql-project-cli```
# Usage
Ejecutamos esta orden
```graphql-anartz```

# Example
![CLI](./cli.gif)
