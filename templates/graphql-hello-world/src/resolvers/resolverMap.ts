import { IResolvers } from 'graphql-tools';
import query from './query';
const resolversMap: IResolvers = {
    ...query
};
export default resolversMap;