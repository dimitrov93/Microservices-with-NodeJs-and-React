import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

// it("fetches the order", async () => {
//   // Create a ticket
//   const ticket = Ticket.build({
//     title: "concert",
//     price: 20,
//   });
//   await ticket.save();

//   const user = global.signin();
//   // make a request to build an order with this ticket
//   const order = await request(app)
//     .post("/api/orders")
//     .set("Cookie", user)
//     .send({ ticketId: ticket.id })
//     .expect(201);

//   const orderId = order.body.id.toString();

//   // make request to fetch the order
//   const fetchedOrder = await request(app)
//     .get(`/api/orders/${order.body.id}`)
//     .set("Cookie", user)
//     .send()
//     .expect(400);

//   expect(fetchedOrder.body.id).toEqual(orderId);
// });

it("returns an error if one user tries to fetch another users order", async () => {
  // Create a ticket
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
  });
  await ticket.save();

  const user = global.signin();
  // make a request to build an order with this ticket
  const { body: order } = await request(app)
    .post("/api/orders")
    .set("Cookie", user)
    .send({ ticketId: ticket.id })
    .expect(201);

  // make request to fetch the order
  await request(app)
    .get(`/api/orders/${order.id}`)
    .set("Cookie", global.signin())
    .send()
    .expect(400);
});
