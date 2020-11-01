import mongoose from 'mongoose'
import { OrderStatusEnum } from '../packages/mainstreet-nats';

export interface ProductDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId
  name: string
  price: string
  sellerId: string
}

export interface OrderDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId
  userId: string
  status: OrderStatusEnum
  product: ProductDocument
  createdAt: Date
}
