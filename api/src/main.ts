import express, { Response, Request } from "express";
import client from "./client";
import router from "./router";

const app = express();

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

app.use(router);

app.listen(5500, () => {
  console.info(`You're server is running on http://localhost:5500`);
});
