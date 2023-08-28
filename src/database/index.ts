import mongoose from "mongoose";
import logger from "../logger";

async function connectDB(uri: string) {
  await mongoose
    .connect(uri)
    .then(response =>
      logger.info(
        "The database connected successfully! Status: " +
          response.connection.readyState.toString(),
      ),
    )
    .catch((error: unknown) => {
      if (error instanceof Error) {
        logger.error(error);
      }

      throw new Error("Could not connect to database");
    });
}

export default connectDB;
