import { Message } from 'node-nats-streaming'
import { CreateProductModel } from '../../domain/interfaces'
import Product from '../../database/model/product.model'
import { NatsListener, NatsEventSubjectEnum, NatsProductCreatedEvent } from '../../packages/mainstreet-nats'
import { QueueGroupNameEnum } from './enums'

export class ProductCreatedListener extends NatsListener<NatsProductCreatedEvent> {
  readonly subject: NatsEventSubjectEnum.PRODUCT_CREATED = NatsEventSubjectEnum.PRODUCT_CREATED
  queueGroupName = QueueGroupNameEnum.ORDER_SERVICE
  
  async onMessage (data: NatsProductCreatedEvent['data'], message: Message): Promise<void> {
    const model: CreateProductModel = {
      ...data
    }

    const product = new Product(model)
    await product.save()

    console.log(`ORDER SERVICE - Product created Event data!`, data)
    console.log(`ORDER SERVICE - Product created!`, product)
    message.ack()
  }
}