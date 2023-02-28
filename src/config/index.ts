import dotenv from "dotenv";

dotenv.config();

type ConfigType = {
  NODE_ENV: string;
  PORT: number | string;
};

const config: ConfigType = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 4000,
};

export default config;
