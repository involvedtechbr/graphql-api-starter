import Fastify, { FastifyInstance } from "fastify";
import mercurius from "mercurius";
import schema from "./graphql/schema";

const app: FastifyInstance = Fastify({ logger: true });

app.register(mercurius, { schema, graphiql: true });

app.get("/", async (_request, reply) => {
  const query = `
    query MyQuery {
      hello
    }
  `;

  return reply.graphql(query);
});

export default app;
