import { Subjects, Publisher, PaymentCreatedEvent } from "@cekodev/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
