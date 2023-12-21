import { Publisher, Subjects, OrderCancelledEvent } from "@cekodev/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
