import { injectable } from 'inversify'
import Order from '../model/order.model'
import { OrderDocument } from '../interfaces'
import { CreateOrderModel } from '../../domain/interfaces'

export interface OrderRepository {
  createOne(model: CreateOrderModel): Promise<OrderDocument>
  findById(_id: string): Promise<OrderDocument | null>
  findAll(userId: string): Promise<OrderDocument[] | null>
}

@injectable()
export class OrderRepositoryImpl implements OrderRepository {
  async createOne(model: CreateOrderModel): Promise<OrderDocument> {
    const order = new Order(model)
    return await order.save()
  }

  async findById(_id: string): Promise<OrderDocument | null> {
    return await Order.findById(_id).select('-__v').populate('product')
  }

  async findAll(userId: string): Promise<OrderDocument[] | null> {
    return await Order.find({ userId }).select('-__v').populate('product')
  }
}
