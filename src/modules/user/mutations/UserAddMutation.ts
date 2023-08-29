import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import UserModel from "../UserModel";
import encryptPassword from "../../../utils/encryptPassword";
import { userField } from "../userFields";

export type UserAddInput = {
  name: string;
  email: string;
  password: string;
};

const mutation = mutationWithClientMutationId({
  name: "UserAddMutation",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: UserAddInput) => {
    const user = await new UserModel({
      name: args.name,
      email: args.email,
      password: await encryptPassword(args.password, 10),
    }).save();

    return {
      user: user._id.toString(),
    };
  },
  outputFields: {
    ...userField("user"),
  },
});

export const UserAddMutation = {
  ...mutation,
};
