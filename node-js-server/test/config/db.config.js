module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306 || process.env.DB_PORT,
  connectionLimit: 10 || process.env.DB_CONNECTION_LIMIT
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
