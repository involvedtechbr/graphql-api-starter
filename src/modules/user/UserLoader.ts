import { createLoader } from "@entria/graphql-mongo-helpers";
import { registerLoader } from "../loader/loaderRegister";

import UserModel from "./UserModel";

const { Wrapper, getLoader, clearCache, load, loadAll } = createLoader({
  model: UserModel,
  loaderName: "UserLoader",
});

registerLoader("UserLoader", getLoader);

export const UserLoader = {
  UserModel: Wrapper,
  getLoader,
  clearCache,
  load,
  loadAll,
};
