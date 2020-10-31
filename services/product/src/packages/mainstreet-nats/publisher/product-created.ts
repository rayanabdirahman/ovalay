import nats from 'node-nats-streaming'
import { NatsPublisher } from '.'
import { NatsProductCreatedEvent } from '../domain/interfaces'
import { NatsEventSubjectEnum } from '../domain/enums'

export class ProductCreatedPublisher extends NatsPublisher<NatsProductCreatedEvent> {
  readonly subject: NatsEventSubjectEnum.PRODUCT_CREATED = NatsEventSubjectEnum.PRODUCT_CREATED
}