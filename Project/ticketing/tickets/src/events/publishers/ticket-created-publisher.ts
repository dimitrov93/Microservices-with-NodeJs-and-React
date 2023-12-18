import { Publisher, Subjects, TicketCreatedEvent } from "@cekodev/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
