import supertest from "supertest";
import app from "../../app";
import { version } from "../../../package.json";

describe("GET /version", () => {
  let response: supertest.Response;

  it("should return status equal 200", async () => {
    await app.ready();

    response = await supertest(app.server).get("/version");

    expect(response.status).toEqual(200);
  });

  it("should return success equal true", async () => {
    response = await supertest(app.server).get("/version");

    expect(response.body.success).toEqual(true);
  });

  it("should return the message in the body equal 'API Version'", async () => {
    response = await supertest(app.server).get("/version");

    expect(response.body.message).toEqual("API Version");
  });

  it("should return correct version", async () => {
    response = await supertest(app.server).get("/version");

    expect(response.body.version).toBe(version);
  });

  it("should return statusCode to be 200", async () => {
    response = await supertest(app.server).get("/version");

    expect(response.body.statusCode).toBe(200);
  });
});
