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
    app.put('/api/product/:_id', AuthGuard, this.updateOne)
    app.get('/api/product/list', this.findAll)
    app.get('/api/product/:_id', this.findOne)
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
      logger.error(`[ProductController: createOne] - Failed to create product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  updateOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params

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

      const product = await this.productService.updateOne(_id, model)

      return ApiResponse.success(res,  { product })
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: updateOne] - Failed to update product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const products = await this.productService.findAll()
      return ApiResponse.success(res,  { products })
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: findAll] - Unable to find products: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params
      const product = await this.productService.findOne(_id)
      return ApiResponse.success(res,  { product })
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: findOne] - Unable to find product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}
