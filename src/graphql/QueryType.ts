import { GraphQLObjectType, GraphQLString } from "graphql";
import { userConnectionField } from "../modules/user/userFields";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root all queries",
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from GraphQL API",
    },
    ...userConnectionField("users"),
  }),
});

export default QueryType;
