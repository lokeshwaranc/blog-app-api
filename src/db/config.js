// import { dotenv as _dotenv } from 'dotenv';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';

const DB_CONFIG = {
  dialect: process.env.DB_ADAPTER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: !isDevelopment ? null : console.info,
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deleteAt: 'deleted_at',
  },
};

module.exports = DB_CONFIG;
