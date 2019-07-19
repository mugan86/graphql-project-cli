import dotenv from 'dotenv';
const environments = dotenv.config({ path: './src/.env'});
if (process.env.NODE_ENV !== 'production') {
    if (environments.error) {
        throw environments.error;
    }
}
export default environments;