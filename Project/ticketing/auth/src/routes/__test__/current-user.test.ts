import request from "supertest";
import { app } from "../../app";

it("responds with details about the current user", async () => {
  const cookie = await global.signin();

  const res = await request(app)
    .get("/api/users/currentUser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(res.body.currentUser.email).toEqual("ceko@abv.bg");
});

it("responds with null if not authenticated", async () => {
  const res = await request(app)
    .get("/api/users/currentUser")
    .send()
    .expect(200);
    
  expect(res.body.currentUser).toEqual(null);
});
