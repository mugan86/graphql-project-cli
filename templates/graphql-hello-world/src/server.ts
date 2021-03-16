// Añadir los imports
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import expressPlayGround from 'graphql-playground-middleware-express';

async function init() {
    // Inicializamos la aplicación express
    const app = express();

    // Añadimos configuración de Cors y compression
    app.use(cors());

    app.use(compression());

    // Inicializamos el servidor de Apollo
    const server = new ApolloServer({
        schema,
        introspection: true // Necesario
    });

    server.applyMiddleware({ app });

    app.use('/', expressPlayGround({
        endpoint: '/graphql'
    }));

    const PORT = process.env.PORT || 5000;

    const httpServer = createServer(app);

    httpServer.listen({ port: PORT }, (): void => console.log(`http://localhost:${PORT}/graphql`));
}

init();
