import { NatsEventSubjectEnum } from './enums'

export interface NatsProductCreatedEvent {
  subject: NatsEventSubjectEnum.PRODUCT_CREATED
  data: {
    id: string
    title: string
    price: number
    userId: string
  }
}

export interface NatsProductUpdatedEvent {
  subject: NatsEventSubjectEnum.PRODUCT_UPDATED
  data: {
    id: string
    title: string
    price: number
    userId: string
  }
}