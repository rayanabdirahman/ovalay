import mongoose from 'mongoose'
import { OrderStatusEnum } from '../../packages/mainstreet-nats'
import { OrderDocument } from '../interfaces'

const OrderSchema: mongoose.Schema = new mongoose.Schema({
  userId: { type: String, required: true},
  status: { 
    type: String,
    required: true,
    enum: Object.values(OrderStatusEnum),
    default: OrderStatusEnum.CREATED
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  createdAt: { type: Date, default: Date.now } 
})

export default mongoose.model<OrderDocument>('Order', OrderSchema)
