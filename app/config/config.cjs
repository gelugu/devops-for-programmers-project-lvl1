require('dotenv').config();

const postgresEnvConfig = {
  dialect: 'postgres',
  database: process.env.DATABASE_NAME,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
};

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: postgresEnvConfig,
  test: postgresEnvConfig,
};
