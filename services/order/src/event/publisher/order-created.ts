import { NatsPublisher, NatsEventSubjectEnum, NatsOrderCreatedEvent } from '../../packages/mainstreet-nats'

export class OrderCreatedPublisher extends NatsPublisher<NatsOrderCreatedEvent> {
  subject: NatsEventSubjectEnum.ORDER_CREATED = NatsEventSubjectEnum.ORDER_CREATED
}
