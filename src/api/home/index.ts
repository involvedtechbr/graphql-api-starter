import { FastifyInstance, FastifyPluginOptions } from "fastify";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} app  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function homeRoute(app: FastifyInstance, options: FastifyPluginOptions) {
  app.get("/", options, async (_request, reply) => {
    const query = `
      query HelloQuery {
        hello
      }
    `;

    return reply.graphql(query);
  });
}

export default homeRoute;
