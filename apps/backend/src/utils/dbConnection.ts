import mongoose from "mongoose";
import { env } from "process";

export const dbConnection = async () => {
  const uri = env.DB_CONN_STRING!;

  await mongoose.connect(uri);
};
