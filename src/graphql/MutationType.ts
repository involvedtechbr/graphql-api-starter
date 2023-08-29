import { GraphQLObjectType } from "graphql";

import { userMutations } from "@/modules/user/mutations/userMutatations";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...userMutations,
  }),
});
