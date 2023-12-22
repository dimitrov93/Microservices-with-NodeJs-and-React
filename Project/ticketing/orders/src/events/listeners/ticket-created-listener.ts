import { Listener, Subjects, TicketCreatedEvent } from "@cekodev/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { queGroupName } from "./que-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queGroupName = queGroupName;

  async onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    const { id, title, price } = data;
    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
