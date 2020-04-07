import { IResolvers } from 'graphql-tools';
import query from './query';

const resolvers : IResolvers = {
    ...query
};

export default resolvers;