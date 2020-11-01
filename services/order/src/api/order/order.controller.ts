import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import { CreateOrderModel } from '../../domain/interfaces'
import OrderValidator from './order.validator'
import {OrderService } from '../../service/order.service'
import logger from '../../utilities/logger'
import ApiResponse from '../../utilities/api-response'
import AuthGuard from '../../middleware/auth-guard'
// import { ProductCreatedPublisher } from '../../event/publisher/product-created'
// import { natsClient } from '../../event/nats-client'

@injectable()
export default class OrderController implements RegistrableController {
  private orderService: OrderService

  constructor(@inject(TYPES.OrderService) orderService:OrderService) {
    this.orderService = orderService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/order', AuthGuard, this.createOne)
    app.get('/api/order/list', AuthGuard, this.findAll)
    app.get('/api/order/:_id', this.findOne)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateOrderModel = {
        ...req.body,
        userId: req.user?._id
      }

      // validate request body
      const validity = OrderValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const order = await this.orderService.createOne(model)

      return ApiResponse.success(res,  { order })

    } catch (error) {
      const { message } = error
      logger.error(`[OrderController: createOne] - Failed to create order: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      // find all orders for specific user
      const userId = req.user?._id as string
      const orders = await this.orderService.findAll(userId)
      return ApiResponse.success(res,  { orders })
    } catch (error) {
      const { message } = error
      logger.error(`[OrderController: findAll] - Unable to find orders: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      // const { _id } = req.params
      // const order = await this.orderService.findOne(_id)
      return ApiResponse.success(res,  { hello: "find one" })
    } catch (error) {
      const { message } = error
      logger.error(`[OrderController: findOne] - Unable to find order: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}
