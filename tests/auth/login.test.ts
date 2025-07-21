

import request from "supertest";
import app from "../../src/app"; // ajuste o caminho conforme necessário

describe("Auth - Login", () => {
  it("should login successfully with valid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@example.com",
        password: "admin123"
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body.user).toHaveProperty("email", "admin@example.com");
  });

  it("should fail with invalid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@example.com",
        password: "wrongpass"
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error");
  });
});