import dotenv from 'dotenv';
// Configurar las variables de entorno: https://github.com/motdotla/dotenv

const environments = dotenv.config({ path: './src/.env' });

if (process.env.NODE_ENV !== 'production') {
  if (environments.error) {
      throw environments.error;
  }
}

export default environments;