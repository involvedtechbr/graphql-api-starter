import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserConnection } from "../modules/user/UserType";
import { connectionArgs } from "graphql-relay";
import { UserLoader } from "../modules/user/UserLoader";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root all queries",
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from GraphQL API",
    },
    allUsers: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args, context) => {
        return await UserLoader.loadAll(context, args);
      },
    },
  }),
});

export default QueryType;
