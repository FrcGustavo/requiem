import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    env: process.env.ENV || 'development',
    port: process.env.PORT || 3000,
  },
  apiUrl: process.env.API_URL || 'http://localhost:8080/api',
};

export default config;
