import { Publisher, Subjects, ExpirationCompleteEvent } from "@cekodev/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}