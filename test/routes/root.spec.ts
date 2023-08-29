import { graphql } from "graphql";
import schema from "../../src/graphql/schema";

describe("Root router tests", () => {
  it("should return message Hello from GraphQL API", async () => {
    const query = `
      query MyQueryApp {
        hello
      }
    `;
    const res = await graphql({ schema, source: query });

    expect(res.data?.hello).toBe("Hello from GraphQL API");
  });

  it("should return empty array", async () => {
    const query = `
      query AllUsers {
        allUsers {
          edges {
            node {
              id
              name
              email
              password
              created_at
              updated_at
            }
          }
        }
      }
    `;

    const res = await graphql({ schema, source: query });

    expect(res.data?.allUsers).toEqual({ edges: [] });
  });
});
