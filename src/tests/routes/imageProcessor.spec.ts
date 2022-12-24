import request from "supertest";

import app from "../..";

describe("A suite to test out Get /api endpoint", () => {
  it("should return status code 200(OK)", () => {
    request(app)
      .get("/api")
      .expect(400);
  });

  it("should return a message to the user if the image doesn't exists", () => {
    request(app)
        .get('/api?filename=image&width=100&height=200')
        .expect('Image not found!');
    });
});
