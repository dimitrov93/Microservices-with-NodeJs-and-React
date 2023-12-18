import { Publisher } from "../../../common/src/events/base-publisher";
import { Subjects } from "../../../common/src/events/subjects";
import { TicketCreatedEvent } from "../../../common/src/events/ticket-created-event";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
