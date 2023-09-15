import { UserType, UserConnection } from "./UserType";
import { UserLoader } from "./UserLoader";
import { connectionArgs } from "graphql-relay";
import { Context } from "../../getContext";

export const userField = (key: string) => ({
  [key]: {
    type: UserType,
    resolve: async (
      obj: Record<string, unknown>,
      _: unknown,
      context: Context,
    ) => await UserLoader.load(context, obj.user as string),
  },
});

export const userConnectionField = (key: string) => ({
  [key]: {
    type: UserConnection.connectionType,
    args: {
      ...connectionArgs,
    },
    resolve: async (_: unknown, args: unknown, context: Context) => {
      return await UserLoader.loadAll(context, args);
    },
  },
});
