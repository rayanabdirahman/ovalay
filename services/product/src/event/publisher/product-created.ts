import { NatsPublisher, NatsEventSubjectEnum, NatsProductCreatedEvent } from '../../packages/mainstreet-nats'

export class ProductCreatedPublisher extends NatsPublisher<NatsProductCreatedEvent> {
  subject: NatsEventSubjectEnum.PRODUCT_CREATED = NatsEventSubjectEnum.PRODUCT_CREATED
}
