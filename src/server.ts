import app from "./app";
import config from "./config";

(async () => {
  const PORT = config.PORT as number;
  const server = app;

  try {
    await server.listen({ port: PORT });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;

    server.log.info("Port " + port);
  } catch (err: unknown) {
    let messageError = "";

    if (err instanceof Error) {
      messageError = err.message;
    }

    server.log.error(messageError);
    process.exit(1);
  }
})();
