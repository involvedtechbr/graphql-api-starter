import { FastifyInstance } from "fastify";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} app  Encapsulated Fastify Instance
 */
export async function homeRoute(app: FastifyInstance) {
  app.get("/", async (_request, reply) => {
    const query = `
      query HelloQuery {
        hello
      }
    `;

    return reply.graphql(query);
  });
}
