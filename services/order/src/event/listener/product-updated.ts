import { Message } from 'node-nats-streaming'
import { CreateProductModel } from '../../domain/interfaces'
import Product from '../../database/model/product.model'
import { NatsListener, NatsEventSubjectEnum, NatsProductUpdatedEvent } from '../../packages/mainstreet-nats'
import { QueueGroupNameEnum } from './enums'

export class ProductUpdatedListener extends NatsListener<NatsProductUpdatedEvent> {
  readonly subject: NatsEventSubjectEnum.PRODUCT_UPDATED = NatsEventSubjectEnum.PRODUCT_UPDATED
  queueGroupName = QueueGroupNameEnum.ORDER_SERVICE
  
  async onMessage (data: NatsProductUpdatedEvent['data'], message: Message): Promise<void> {
    const model: CreateProductModel = {
      ...data
    }

    const product = await Product.findById(data._id)
    if (!product) {
      throw new Error('Product not found')
    }

    product.set({ ...model })

    await product.save()

    console.log(`ORDER SERVICE - Product updated Event data!`, data)
    message.ack()
  }
}