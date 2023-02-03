import { Sequelize } from 'sequelize-typescript';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./database.config');
const rootSequelizeInstance = new Sequelize({
  dialect: config.dialect,
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  ...config,
});

export default rootSequelizeInstance;
