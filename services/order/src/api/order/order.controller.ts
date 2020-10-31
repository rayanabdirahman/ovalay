import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import { CreateOrderModel } from '../../domain/interfaces'
import OrderValidator from './order.validator'
// import { ProductService } from '../../service/product.service'
import logger from '../../utilities/logger'
import ApiResponse from '../../utilities/api-response'
import AuthGuard from '../../middleware/auth-guard'
// import { ProductCreatedPublisher } from '../../event/publisher/product-created'
// import { natsClient } from '../../event/nats-client'

@injectable()
export default class OrderController implements RegistrableController {
  // private productService: ProductService

  // constructor(@inject(TYPES.ProductService) productService: ProductService) {
  //   this.productService = productService
  // }

  registerRoutes(app: express.Application): void {
    app.post('/api/order', AuthGuard, this.createOne)
    app.get('/api/order/list', this.findAll)
    app.get('/api/order/:_id', this.findOne)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateOrderModel = {
        ...req.body,
        userId: req.user?._id
      }

      // // validate request body
      // const validity = ProductValidator.createOne(model)
      // if (validity.error) {
      //   const { message } = validity.error
      //   return ApiResponse.error(res, message)
      // }

      // const product = await this.productService.createOne(model)

      // // publish nats event for created product
      // new ProductCreatedPublisher(natsClient.client).publish({
      //   id: JSON.stringify(product._id),
      //   name: product.name,
      //   price: product.price,
      //   sellerId: product.sellerId
      // })

      return ApiResponse.success(res,  { hello: "create one" })

    } catch (error) {
      const { message } = error
      logger.error(`[OrderController: createOne] - Failed to create order: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      // const products = await this.productService.findAll()
      return ApiResponse.success(res,  { hello: "find all" })
    } catch (error) {
      const { message } = error
      logger.error(`[OrderController: findAll] - Unable to find orders: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      // const { _id } = req.params
      // const product = await this.productService.findOne(_id)
      return ApiResponse.success(res,  { hello: "find one" })
    } catch (error) {
      const { message } = error
      logger.error(`[OrderController: findOne] - Unable to find order: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}
