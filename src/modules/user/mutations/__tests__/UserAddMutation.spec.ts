import { graphql } from "graphql";
import schema from "../../../../graphql/schema";
import { getContext } from "../../../../getContext";
import UserModel from "../../UserModel";

describe("User Add Mutation tests", () => {
  const mockUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "123",
  };

  it("should not create a new user", async () => {
    const query = `
      mutation CreateUser($name: String!, $email: String!, $password: String!) {
        UserAdd(input: {
          name: $name
          email: $email
          password: $password
        }) {
          user {
            name
            email
          }
        }
      }
    `;

    const variables = {
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
    };

    const res = await graphql({
      schema,
      source: query,
      variableValues: variables,
    });

    expect(res.data?.UserAdd).toEqual({ user: null });
  });

  it("should create a new user", async () => {
    const query = `
      mutation CreateUser($name: String!, $email: String!, $password: String!) {
        UserAdd(input: {
          name: $name
          email: $email
          password: $password
        }) {
          user {
            name
            email
            password
            active
            created_at
            updated_at
          }
        }
      }
    `;

    const rootValues = {};
    const context = getContext();
    const variables = {
      name: mockUser.name,
      email: "johndoe2@example.com",
      password: mockUser.password,
    };

    const res = await graphql({
      schema,
      source: query,
      rootValue: rootValues,
      contextValue: context,
      variableValues: variables,
    });

    const user = await UserModel.findOne({ email: variables.email });

    expect(res.data?.UserAdd).toEqual({
      user: {
        name: user?.name,
        email: variables.email,
        password: user?.password,
        active: user?.active,
        created_at: user?.created_at.toISOString(),
        updated_at: user?.updated_at.toISOString(),
      },
    });
  });

  it("should not create a new user with the same email", async () => {
    const query = `
      mutation CreateUser($name: String!, $email: String!, $password: String!) {
        UserAdd(input: {
          name: $name
          email: $email
          password: $password
        }) {
          user {
            name
            email
          }
        }
      }
    `;

    const rootValues = {};
    const context = getContext();
    const variables = {
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
    };

    const res = await graphql({
      schema,
      source: query,
      rootValue: rootValues,
      contextValue: context,
      variableValues: variables,
    });

    expect(res.data?.UserAdd).toBe(null);
  });
});
