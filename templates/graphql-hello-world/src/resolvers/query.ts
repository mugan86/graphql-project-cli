<<<<<<< HEAD
import { IResolvers } from 'graphql-tools';
=======
import { IResolvers } from "graphql-tools";
import { LIST } from "./resolversMap";
>>>>>>> 6e73835188b71df40780d6fbcb50db66adb09460

const query: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        },
        list() {
            return LIST;
        }
    }
}

export default query;