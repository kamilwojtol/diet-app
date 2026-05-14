import express from "express";
import cors from "cors";
import { router } from "./routes/diet.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("Server is running");
});
