import mysql from "mysql2/promise";
import "dotenv/config";

// Get variables from .env file for database connection
const { DB_PASSWORD } = process.env;

const client = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "julien",
  password: DB_PASSWORD,
  database: "my_blog",
});

export default client;
