import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";
import { globalIdField, connectionDefinitions } from "graphql-relay";

import { UserInterface } from "./UserInterface";
import { nodeInterface } from "../node/typeRegister";
import { registerTypeLoader } from "../node/typeRegister";
import { UserLoader } from "./UserLoader";

const UserType = new GraphQLObjectType<UserInterface>({
  name: "User",
  description: "Represents a user",
  fields: () => ({
    id: globalIdField("User"),
    name: {
      type: GraphQLString,
      resolve: user => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    password: {
      type: GraphQLString,
      resolve: user => user.password,
    },
    active: {
      type: GraphQLBoolean,
      resolve: user => user.active,
    },
    created_at: {
      type: GraphQLString,
      resolve: user => user.created_at.toISOString(),
    },
    updated_at: {
      type: GraphQLString,
      resolve: user => user.updated_at.toISOString(),
    },
  }),
  interfaces: () => [nodeInterface],
});

const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});

registerTypeLoader(UserType, UserLoader.load);

export { UserType, UserConnection };
