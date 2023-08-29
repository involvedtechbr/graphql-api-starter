import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import mercurius from "mercurius";
import schema from "./graphql/schema";
import logger from "./logger";
import { getContext } from "./getContext";

const app = Fastify({ logger });

app.register(cors);
app.register(mercurius, {
  schema,
  graphiql: true,
  context: (_request, _reply) => getContext(),
});

app.get("/", async (_request, reply) => {
  const query = `
    query MyQuery {
      hello
    }
  `;

  return reply.graphql(query);
});

export default app;
