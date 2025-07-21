import request from "supertest";
import app from "../../src/app";

describe("Protected User Routes", () => {
  let token: string;

  beforeAll(async () => {
    // Faz login e armazena o token
    const res = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
      password: "admin123",
    });

    token = res.body.token;
  });

  it("should access protected route with valid token", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should fail to access protected route without token", async () => {
    const res = await request(app).get("/api/users");

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("error");
  });
});