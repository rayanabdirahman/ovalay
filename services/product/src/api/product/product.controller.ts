import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import logger from '../../util/logger'
import ApiResponse from '../../util/api-response'
import { CreateNewProductModel } from '../../domain/interfaces'
import ProductValidator from './product.validator'
import { ProductService } from '../../service/product.service'
import MulterUpload from '../../middleware/multer.middleware'


@injectable()
export default class ProductController implements RegistrableController {
  private productService: ProductService

  constructor(@inject(TYPES.ProductService) productService: ProductService) {
    this.productService = productService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/product/', MulterUpload.single('photo'), this.createOne)
    app.get('/api/product/', this.findAll)
    app.get('/api/product/:_id', this.findOne)
    app.put('/api/product/:_id', MulterUpload.single('photo'), this.updateOne)
    app.delete('/api/product/:_id', this.deleteOne)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateNewProductModel = {
        ...req.body,
        // @ts-ignore
        photo: req.file ? req.file.location : null
      }

      // validate request body
      const validity = ProductValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const product = await this.productService.createOne(model)
      
      return ApiResponse.success(res,  product)
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: createOne] - Unable to create product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const products = await this.productService.findAll()
      return ApiResponse.success(res,  products)
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
      return ApiResponse.success(res,  product)
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: findOne] - Unable to find product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  updateOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params

      const model: CreateNewProductModel = {
        ...req.body,
        // @ts-ignore
        photo: req.file ? req.file.location : null
      }

      // validate request body
      const validity = ProductValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      } 

      const product = await this.productService.updateOne(_id, model)
      
      return ApiResponse.success(res,  product)
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: updateOne] - Unable to update product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  deleteOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params
      const product = await this.productService.deleteOne(_id)
      return ApiResponse.success(res,  product)
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: deleteOne] - Unable to delete product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}