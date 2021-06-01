export default () => ({
  port: process.env.SERVER_PORT || 3000,
  timeout: process.env.SERVER_TIMEOUT || 5000,

  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),

    synchronize: true, // dev only
    entities: ['src/**/**.entity{.ts,.js}'],
    subscribers: ['src/subscriber/*.js'],
    migrations: ['src/migration/*.js'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  }
});