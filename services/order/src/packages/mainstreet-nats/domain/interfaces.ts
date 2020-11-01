import { NatsEventSubjectEnum, OrderStatusEnum } from './enums'

export interface NatsProductCreatedEvent {
  subject: NatsEventSubjectEnum.PRODUCT_CREATED
  data: {
    id: string
    name: string
    price: string
    sellerId: string
  }
}

export interface NatsProductUpdatedEvent {
  subject: NatsEventSubjectEnum.PRODUCT_UPDATED
  data: {
    id: string
    title: string
    price: string
    userId: string
  }
}

export interface NatsOrderCreatedEvent {
  subject: NatsEventSubjectEnum.ORDER_CREATED
  data: {
    id: string
    status: OrderStatusEnum
    userId: string
    product: {
      id: string
      price: string
    }
  }
}
