import dotenv from "dotenv";

dotenv.config();

type ConfigType = {
  NODE_ENV: string;
  HOST: string;
  PORT: number | string;
  MONGO_URI: string;
};

const config: ConfigType = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/test",
};

export default config;
