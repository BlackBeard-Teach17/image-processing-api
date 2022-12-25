import request from "supertest";
import app from "..";

describe("A suite to check if server is running", () => {
  it("should return status code 200(OK)", () => {
    request(app).get("/").expect(200);
  });
});
