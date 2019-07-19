// Añadir los imports
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import environments from './config/environments';

// Inicializar variables de entorno
const environment = environments;

// Inicializamos la aplicación express

const app = express();

// Añadimos configuración de Cors y compression
app.use('*', cors());

app.use(compression());

// Inicializamos el servidor de Apollo
const server = new ApolloServer({
    schema: schema,
    introspection: true // Necesario
});

server.applyMiddleware({ app });

app.use('/', (req: any, res: any) => {
    res.send('Bienvenido a la API de Saludo!!');
});
const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);

httpServer.listen({ port:  PORT }, () : void => console.log(`http://localhost:${ PORT }/graphql`));
