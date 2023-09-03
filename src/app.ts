import Fastify from "fastify";
import cors from "@fastify/cors";
import mercurius from "mercurius";
import schema from "./graphql/schema";
import logger from "./logger";
import { getContext } from "./getContext";
import { homeRoute, versionRoute } from "./api";

const app = Fastify({ logger });

app.register(cors, { origin: "*" });
app.register(mercurius, {
  schema,
  graphiql: true,
  context: () => getContext(),
});

// routes
app.register(homeRoute, { prefix: "/" });
app.register(versionRoute, { prefix: "/version" });

export default app;
