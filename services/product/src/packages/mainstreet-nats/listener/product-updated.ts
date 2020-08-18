import nats from 'node-nats-streaming'
import { NatsListener } from '.'
import { NatsEventSubjectEnum } from '../domain/enums'
import { NatsProductUpdatedEvent } from '../domain/interfaces'

export class ProductCreatedUpdated extends NatsListener<NatsProductUpdatedEvent> {
  readonly subject: NatsEventSubjectEnum.PRODUCT_UPDATED = NatsEventSubjectEnum.PRODUCT_UPDATED
  queueGroupName = 'product-service'

  onMessage (data: NatsProductUpdatedEvent['data'], message: nats.Message): void {
    console.log(`Event data!`, data)
    message.ack()
  }
}