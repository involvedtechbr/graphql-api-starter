import Fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = Fastify({ logger: true });

app.get("/", (_request, _reply) => {
  return {
    message: "GraphQL API",
  };
});

export default app;
