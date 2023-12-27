import { Listener, OrderCreatedEvent, Subjects } from "@cekodev/common";
import { queGroupName } from "./queGroupName";
import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queues/expiration-que";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queGroupName = queGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log("Waiting this many milisecods to process the job: ", delay);

    await expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay,
      }
    );
    msg.ack();
  }
}
