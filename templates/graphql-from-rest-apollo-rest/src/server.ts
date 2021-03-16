// Añadir los imports
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { dataSources } from './data';
import expressPlayground from 'graphql-playground-middleware-express';
// Inicializamos la aplicación express

const app = express();

// Añadimos configuración de Cors y compression
app.use('*', cors());

app.use(compression());

// Inicializamos el servidor de Apollo
const server = new ApolloServer({
    schema: schema,
    introspection: true, // Necesario
    dataSources: ()  => ({
        seasons: new dataSources.SeasonsData(),
        races: new dataSources.RacesData(),
        drivers: new dataSources.DriversData(),
        circuits: new dataSources.CircuitsData()
    })
});

server.applyMiddleware({ app });

app.use('/', expressPlayground ({
    endpoint: '/graphql'
}
));
const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);

httpServer.listen({ port: PORT }, () : void => console.log(`http://localhost:${ PORT }/graphql`));
