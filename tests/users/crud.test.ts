

import request from "supertest";
import app from "../../src/app";

describe("User CRUD", () => {
  let token: string;
  let createdUserId: string;

  beforeAll(async () => {
    // Faz login e armazena o token
    const res = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
      password: "admin123",
    });

    token = res.body.token;
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Test User",
        email: "testuser@example.com",
        password: "test1234",
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    createdUserId = res.body.id;
  });

  it("should get list of users", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get the created user by ID", async () => {
    const res = await request(app)
      .get(`/api/users/${createdUserId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", createdUserId);
  });

  it("should update the created user", async () => {
    const res = await request(app)
      .put(`/api/users/${createdUserId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Updated Name" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("name", "Updated Name");
  });

  it("should delete the created user", async () => {
    const res = await request(app)
      .delete(`/api/users/${createdUserId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(204);
  });
});