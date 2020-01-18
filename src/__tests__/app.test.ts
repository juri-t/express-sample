const request = require("supertest");
import { createApp } from "../app";

describe("routing", () => {
  const app = createApp();

  describe("/", () => {
    it("response.status is 200 OK", done => {
      request(app)
        .get("/")
        .expect(200, done);
    })
  })
});