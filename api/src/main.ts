import express, { Response, Request } from "express";
import mysql from "mysql2/promise";
import "dotenv/config";

const app = express();

// Get variables from .env file for database connection
const { DB_PASSWORD } = process.env;
console.log(DB_PASSWORD);

const client = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "julien",
  password: DB_PASSWORD,
  database: "my_blog",
});

client
  .getConnection()
  .then((connection) => {
    console.info(`Using database my blog`);

    connection.release();
  })
  .catch((error: Error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.warn(error.message);
  });

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome Wilders");
});

app.get("/articles", async (req: Request, res: Response) => {
  try {
    const articles = await client.query("SELECT * FROM article");
    console.log(articles);
    res.status(200).json(articles[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(5500, () => {
  console.info(`You're server is running on http://localhost:5500`);
});
