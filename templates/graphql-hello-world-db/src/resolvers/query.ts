import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args: any): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        }
    }
};

export default query;