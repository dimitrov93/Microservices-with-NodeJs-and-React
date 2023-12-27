import mongoose from "mongoose";
import { Ticket } from "../../../models/ticket";
import { natsWrapper } from "../../../nats-wrapper";
import { OrderCreatedListener } from "../order-created-listener";
import { OrderCreatedEvent, OrderStatus } from "@cekodev/common";
import { Message } from "node-nats-streaming";

const setup = async () => {
  const listener = new OrderCreatedListener(natsWrapper.client);
  const ticket = Ticket.build({
    title: "concert",
    price: 90,
    userId: "asd",
  });
  await ticket.save();

  const data: OrderCreatedEvent["data"] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: "asdfsa",
    expiresAt: "asdfasf",
    ticket: {
      id: ticket.id,
      price: ticket.price,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, ticket, data, msg };
};

it("sets the userId of the ticket", async () => {
  const { listener, ticket, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.orderId).toEqual(data.id)
});

it("acks the message", async () => {
    const { listener, ticket, data, msg } = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled()
});

it("publishes a ticket updated event", async () => {
    const { listener, ticket, data, msg } = await setup();

    await listener.onMessage(data, msg);

    expect(natsWrapper.client.publish).toHaveBeenCalled();

    //  @ts-ignore
    const ticketUpdatedData = JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1]);
    
    expect(data.id).toEqual(ticketUpdatedData.orderId)
});
