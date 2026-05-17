import { MongoClient } from "mongodb";
import { env } from "process";

export const dbHandler = async () => {
  const uri = env.DB_CONN_STRING!;

  const client = new MongoClient(uri);

  await client.connect();

  return client.db("diet-app");
};
