import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import logger from '../../util/logger'
import ApiResponse from '../../util/api-response'
import { CreateCategory } from '../../domain/interfaces'
import CategoryValidator from './category.validator'
import { CategoryService } from '../../service/category.service'

@injectable()
export default class CategoryController implements RegistrableController {
  private categoryService: CategoryService

  constructor(@inject(TYPES.CategoryService) categoryService: CategoryService) {
    this.categoryService = categoryService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/category/', this.createOne)
    app.get('/api/category/', this.findAll)
    app.delete('/api/category/:_id', this.deleteOne)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateCategory = {
        ...req.body
      }

      // validate request body
      const validity = CategoryValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const category = await this.categoryService.createOne(model)
      
      return ApiResponse.success(res,  category)
    } catch (error) {
      const { message } = error
      logger.error(`[CategoryController: createOne] - Unable to create category: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const category = await this.categoryService.findAll()
      return ApiResponse.success(res,  category)
    } catch (error) {
      const { message } = error
      logger.error(`[CategoryController: findAll] - Unable to find categories: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  deleteOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params
      const category = await this.categoryService.deleteOne(_id)
      return ApiResponse.success(res,  category)
    } catch (error) {
      const { message } = error
      logger.error(`[CategoryController: deleteOne] - Unable to delete category: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}