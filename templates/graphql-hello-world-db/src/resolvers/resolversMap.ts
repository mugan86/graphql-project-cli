import { IResolvers } from 'graphql-tools';
import query from './query';

export const LIST: string [] = [ ];
const resolvers : IResolvers = {
    ...query
};

export default resolvers;