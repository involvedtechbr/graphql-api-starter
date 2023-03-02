import { describe, it, expect } from "vitest";
import { graphql } from "graphql";
import app from "../../src/app";
import schema from "../../src/graphql/schema";

describe("Root router tests", () => {
  it("should return message Hello from GraphQL API", async () => {
    const query = `
      query MyQueryApp {
        hello
      }
    `;
    const res = await graphql({ schema, source: query  });

    expect(res.data?.hello).toBe("Hello from GraphQL API");
  });
});