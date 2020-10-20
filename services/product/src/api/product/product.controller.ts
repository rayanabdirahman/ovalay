import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import { CreateProductModel } from '../../domain/interfaces'
import ProductValidator from './product.validator'
import { ProductService } from '../../service/product.service'
import logger from '../../utilities/logger'
import ApiResponse from '../../utilities/api-response'
import AuthGuard from '../../middleware/auth-guard'

@injectable()
export default class UserController implements RegistrableController {
  private productService: ProductService

  constructor(@inject(TYPES.ProductService) productService: ProductService) {
    this.productService = productService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/product', AuthGuard, this.createOne)
    app.put('/api/product/:_id', this.updateOne)
    app.get('/api/product/:_id', this.findOne)
    app.get('/api/product/list', this.findAll)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateProductModel = {
        ...req.body,
        sellerId: req.user?._id
      }

      // validate request body
      const validity = ProductValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const product = await this.productService.createOne(model)

      return ApiResponse.success(res,  { product })

    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: createOne] - Unable to create product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  updateOne = async (req: express.Request, res: express.Response): Promise<void> => {}
  findOne = async (req: express.Request, res: express.Response): Promise<void> => {}
  findAll = async (req: express.Request, res: express.Response): Promise<void> => {}
}
