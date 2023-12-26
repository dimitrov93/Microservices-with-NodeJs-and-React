import { Listener, Subjects, TicketUpdatedEvent } from "@cekodev/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { queGroupName } from "./que-group-name";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
  queGroupName = queGroupName;

  async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
    const ticket = await Ticket.findByEvent(data)

    if (!ticket) throw new Error("Ticket not found");

    const { title, price } = data;
    ticket.set({ title, price });
    await ticket.save();

    msg.ack();
  }
}
