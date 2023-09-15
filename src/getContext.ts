import { getDataloaders } from "./modules/loader/loaderRegister";
import { BaseContext } from "@entria/graphql-mongo-helpers/lib/createLoader";
import { UserInterface } from "./modules/user/UserInterface";

export type Context = BaseContext<string, UserInterface>;

const getContext = () => {
  const dataloaders = getDataloaders();

  return {
    dataloaders,
  } as const;
};

export { getContext };
