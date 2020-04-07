import { IResolvers } from 'graphql-tools';
import query from './query';
import mutation from './mutation';

const resolvers : IResolvers = {
    ...query,
    ...mutation
};

export default resolvers;