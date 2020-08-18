import { NatsPublisher, NatsEventSubjectEnum, NatsProductUpdatedEvent } from '../../packages/mainstreet-nats'

export class ProductUpdatedPublisher extends NatsPublisher<NatsProductUpdatedEvent> {
  subject: NatsEventSubjectEnum.PRODUCT_UPDATED = NatsEventSubjectEnum.PRODUCT_UPDATED
}