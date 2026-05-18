import express from "express";
import cors from "cors";
import { router } from "./routes/diet.js";
import { loadEnvFile } from "process";
import { dbConnection } from "./utils/dbConnection.js";

loadEnvFile(`${import.meta.dirname}/.env`);

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, async () => {
  await dbConnection();
  console.log("Server is running");
});
