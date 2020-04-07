import { IResolvers } from 'graphql-tools';
import JWT from '../lib/jwt';
import bcryptjs from 'bcryptjs';

const query : IResolvers = {
    Query : {
        async users (_: void, __: any, { db }): Promise<any> {
            return await db.collection('users').find().toArray();
        },
        async login(_: void, { email, password }, { db }): Promise<any> {
            const user = await db.collection('users').findOne({email});
            if (user === null) {
                return {
                    status: false,
                    message: 'Login INCORRECTO. No existe el usuario',
                    token: null
                };
            }

            if (!bcryptjs.compareSync(password, user.password)) {
                return {
                    status: false,
                    message: 'Login INCORRECTO. Contraseña incorrecta',
                    token: null
                };
            }
            delete user.password;
            return {
                status: true,
                message: 'Login Correcto',
                token: new JWT().sign({ user })
            };
        },
        me(_: void, __: any, { token }) {
            let info: any = new JWT().verify(token);
            if (info === 'La autenticación del token es inválida. Por favor, inicia sesión para obtener un nuevo token') {
                return {
                    status: false,
                    message: info,
                    user: null
                };
            }
            return {
                status: true,
                message: 'Token correcto',
                user: info.user
            };
        }
    }
};

export default query;