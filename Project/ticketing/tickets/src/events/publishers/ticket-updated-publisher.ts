import { Publisher, Subjects, TicketUpdatedEvent } from "@cekodev/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
