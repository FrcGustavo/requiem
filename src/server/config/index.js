import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
  },
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
  },
  apiUrl: process.env.API_URL || 'http://localhost:8080/api',
};

export default config;
