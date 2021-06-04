import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export interface GlobalConfig {
  port: number;
  timeout: number;

  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;

    entities: string[];
    subscribers: string[];
    migrations: string[];
    cli: {
      entitiesDir: string;
      migrationsDir: string;
      subscribersDir: string;
    };
    namingStrategy: SnakeNamingStrategy;
    synchronize?: boolean;
  };

  shortLink: {
    host: string;
  };
}

export default (): GlobalConfig => ({
  port: Number(process.env.SERVER_PORT) || 3000,
  timeout: Number(process.env.SERVER_TIMEOUT) || 5000,

  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    entities: ['dist/**/*.entity{ .ts,.js}'],
    subscribers: ['src/subscriber/**/*{ts,js}'],
    migrations: ['src/migrations/**/*.{ts,js}'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },

    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true, // dev only
  },

  shortLink: {
    host: process.env.SL_HOST,
  },
});
