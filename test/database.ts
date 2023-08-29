import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo_server: MongoMemoryServer;

export async function connect(): Promise<void> {
  mongo_server = await MongoMemoryServer.create();
  const mongo_uri = mongo_server.getUri();
  await mongoose.connect(mongo_uri);
}

export async function clean(): Promise<void> {
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) await collection.drop();
}

export async function close(): Promise<void> {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongo_server.stop();
}
