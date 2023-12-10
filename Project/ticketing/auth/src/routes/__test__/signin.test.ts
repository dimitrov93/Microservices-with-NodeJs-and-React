import request from "supertest";
import { app } from "../../app";

it("fails when a email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "test@test.com",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "ceko@abv.bg",
      password: "ceko@abv.bg",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "ceko@abv.bg",
      password: "asdas",
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "ceko@abv.bg",
      password: "ceko@abv.bg",
    })
    .expect(201);

  const res = await request(app)
    .post("/api/users/signin")
    .send({
      email: "ceko@abv.bg",
      password: "ceko@abv.bg",
    })
    .expect(200);

  expect(res.get("Set-Cookie")).toBeDefined();
});
