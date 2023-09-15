import { GraphQLObjectType, GraphQLString } from "graphql";
import { nodeField, nodesField } from "../modules/node/typeRegister";
import { userConnectionField } from "../modules/user/userFields";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root all queries",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from GraphQL API",
    },
    ...userConnectionField("users"),
  }),
});

export default QueryType;
