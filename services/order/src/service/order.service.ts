import { injectable, inject } from 'inversify'
import { OrderDocument } from '../database/interfaces'
import { OrderRepository } from '../database/repository/order.repository'
import { ProductRepository } from '../database/repository/product.repository'
import { CreateOrderModel } from '../domain/interfaces'
import TYPES from '../types'
import logger from '../utilities/logger'

export interface OrderService {
  createOne(model: CreateOrderModel): Promise<OrderDocument>
  findOne(_id: string): Promise<OrderDocument | null>
  findAll(userId: string): Promise<OrderDocument[] | null>
}

@injectable()
export class OrderServiceImpl implements OrderService {
  private orderRepository: OrderRepository
  private productRepository: ProductRepository

  constructor(
    @inject(TYPES.OrderRepository) orderRepository: OrderRepository,
    @inject(TYPES.ProductRepository) productRepository: ProductRepository) {
    this.orderRepository = orderRepository
    this.productRepository = productRepository
  }

  async isProductAvailable(_id: string): Promise<boolean> {
    return await this.productRepository.findById(_id) ? Promise.resolve(true) : Promise.resolve(false)
  }

  async createOne(model: CreateOrderModel): Promise<OrderDocument> {
    try {
      // check if product is available in database
      if (!await this.isProductAvailable(model.productId)) {
        throw new Error('This product is not available for order')
      }

      const order = await this.orderRepository.createOne(model)
      return order
    } catch(error) {
      logger.error(`[OrderService: createOne]: Unabled to create order: ${error}`)
      throw error
    }
  }

  async findOne(_id: string): Promise<OrderDocument | null> {
    try {
      const order = await this.orderRepository.findById(_id)
      return order
    } catch(error) {
      logger.error(`[OrderService: findOne]: Unable to find order: ${error}`)
      throw error
    }
  }

  async findAll(userId: string): Promise<OrderDocument[] | null> { 
    try {
      return await this.orderRepository.findAll(userId)
    } catch(error) {
      logger.error(`[OrderService: findAll]: Unable to find orders: ${error}`)
      throw error
    }
  }
}
