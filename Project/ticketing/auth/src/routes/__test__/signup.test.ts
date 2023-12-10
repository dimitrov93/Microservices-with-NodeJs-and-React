import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "test@test.com",
    })
    .expect(201);
});

it("returns a 400 with invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "asdfasfsa",
      password: "test@test.com",
    })
    .expect(400);
});

it("returns a 400 with invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.bg",
      password: "p",
    })
    .expect(400);
});

it("returns a 400 with missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.bg",
    })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({
      password: "asdfsa",
    })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.bg",
      password: "test@test.bg",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.bg",
      password: "test@test.bg",
    })
    .expect(400);
});

it("sets a cooking after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.bg",
      password: "test@test.bg",
    })
    .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined()
});
