import {
  FastifyInstance,
  RouteShorthandOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { version } from "../../../package.json";

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          message: { type: "string" },
          version: { type: "string" },
          statusCode: { type: "number" },
        },
      },
    },
  },
};

/**
 * Encapsulates the routes
 * @param {FastifyInstance} app Encapsulated Fastify Instance
 */
export async function versionRoute(app: FastifyInstance) {
  app.get("/", opts, async (_request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).send({
      success: true,
      statusCode: reply.statusCode,
      message: "API Version",
      version,
    });
  });
}
