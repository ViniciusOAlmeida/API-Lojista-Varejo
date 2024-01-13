const { env } = process;

export const configuration = {
  PORT: env.HTTP_PORT || 3003,
  DATABASE: {
    HOST: env.DATABASE_HOST || 'localhost',
    PORT: env.DATABASE_PORT || 27017,
    NAME: env.DATABASE_NAME || 'lojista-varejo',
    USER: env.DATABASE_USER || 'root',
    PASSWORD: env.DATABASE_PASSWORD || 'root'
  },
  JWT: {
    SECRET: env.JWT_SECRET || 'secret'
  }
};
