import { IResolvers } from "graphql-tools";
import query from "./query";
import mutation from "./mutation";

export const LIST: string [] = [ ];
const resolvers : IResolvers = {
    ...query,
    ...mutation
}

export default resolvers;