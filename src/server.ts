import app from "./app";
import config from "./config";
import connectDB from "./database";

(async () => {
  const PORT = config.PORT as number;
  const HOST = config.HOST;
  const MONGO_URI: string = config.MONGO_URI;

  try {
    await connectDB(MONGO_URI);
    await app.listen({ host: HOST, port: PORT });

    const address = app.server.address();
    const port = typeof address === "string" ? address : address?.port;

    app.log.info("Port " + port);
  } catch (err: unknown) {
    let messageError = "";

    if (err instanceof Error) {
      messageError = err.message;
    }

    app.log.error(messageError);
    process.exit(1);
  }
})();
