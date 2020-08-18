import nats from 'node-nats-streaming'
import { NatsListener } from '.'
import { NatsEventSubjectEnum } from '../domain/enums'
import { NatsProductCreatedEvent } from '../domain/interfaces'

export class ProductCreatedListener extends NatsListener<NatsProductCreatedEvent> {
  readonly subject: NatsEventSubjectEnum.PRODUCT_CREATED = NatsEventSubjectEnum.PRODUCT_CREATED
  queueGroupName = 'product-service'

  onMessage (data: NatsProductCreatedEvent['data'], message: nats.Message): void {
    console.log(`Event data!`, data)
    message.ack()
  }
}