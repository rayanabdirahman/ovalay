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
}