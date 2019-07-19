import { IResolvers } from "graphql-tools";
import { Datetime } from "../lib/datetime";
import bcryptjs from 'bcryptjs';
const mutation: IResolvers = {
    Mutation: {
        async register(_: void, { user }, { db }): Promise<any> {

            const userCheck = await db.collection('users').findOne({ email: user.email });

            if (userCheck !== null) {
                return {
                    status: false,
                    message: `Usuario NO registrado porque ya existe el usuario ${user.email}`,
                    user: null
                };
            }
            const lastUser = await db.collection('users').find()
                .limit(1).sort({ registerDate: -1 }).toArray();
            if (lastUser.length === 0) {
                user.id = 1;
            } else {
                user.id = lastUser[0].id + 1;
            }
            user.password = bcryptjs.hashSync(user.password, 10);
            user.registerDate = new Datetime().getCurrentDateTime();
            return await db.collection('users').insertOne(user)
                .then((result: any) => {
                    return {
                        status: true,
                        message: `Usuario ${user.name} ${user.lastname} añadido correctamente`,
                        user
                    };
                })
                .catch((err: any) => {
                    return {
                        status: false,
                        message: `Usuario NO añadido correctamente`,
                        user: null
                    };
                });
        }
    }
}

export default mutation;