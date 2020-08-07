import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import logger from '../../util/logger'
import ApiResponse from '../../util/api-response'
import { CreateNewProductModel } from '../../domain/interfaces'
import ProductValidator from './product.validator'


@injectable()
export default class ProductController implements RegistrableController {

  constructor() {
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/product/', this.createOne)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateNewProductModel = {
        ...req.body
      }

      // validate request body
      const validity = ProductValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }
      
      return ApiResponse.success(res,  model)
    } catch (error) {
      const { message } = error
      logger.error(`[ProductController: createOne] - Unable to create product: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}