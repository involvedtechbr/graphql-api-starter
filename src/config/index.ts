import dotenv from "dotenv";

dotenv.config();

type ConfigType = {
  NODE_ENV: string;
  HOST: string;
  PORT: number | string;
};

const config: ConfigType = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 4000,
};

export default config;
