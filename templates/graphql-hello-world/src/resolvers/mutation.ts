import { IResolvers } from "graphql-tools";
import { LIST } from "./resolversMap";
const mutation: IResolvers = {
    Mutation: {
        add(_: void, { value }: any) {
            LIST.push(value);
            return LIST;
        }
    }
}

export default mutation;