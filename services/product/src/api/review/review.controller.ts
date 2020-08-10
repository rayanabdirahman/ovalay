import express from 'express'
import { RegistrableController } from '../registrable.controller'
import { injectable, inject } from 'inversify'
import TYPES from '../../types'
import logger from '../../util/logger'
import ApiResponse from '../../util/api-response'
import { CreateReview } from '../../domain/interfaces'
import ReviewValidator from '../review/review.validator'
import { ReviewService } from '../../service/review.service'
import MulterUpload from '../../middleware/multer.middleware'

@injectable()
export default class ReviewController implements RegistrableController {
  private reviewService: ReviewService

  constructor(@inject(TYPES.ReviewService) reviewService: ReviewService) {
    this.reviewService = reviewService
  }

  registerRoutes(app: express.Application): void {
    app.post('/api/review/', MulterUpload.single('photo'), this.createOne)
    app.get('/api/review/', this.findAll)
    app.put('/api/review/:_id', MulterUpload.single('photo'), this.updateOne)
    app.delete('/api/review/:_id', this.deleteOne)
  }

  createOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const model: CreateReview = {
        ...req.body,
        // @ts-ignore
        photo: req.file ? req.file.location : null
      }

      // validate request body
      const validity = ReviewValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const review = await this.reviewService.createOne(model)
      
      return ApiResponse.success(res,  { review })
    } catch (error) {
      const { message } = error
      logger.error(`[ReviewController: createOne] - Unable to create review: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  findAll = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const review = await this.reviewService.findAll()
      return ApiResponse.success(res,  { review })
    } catch (error) {
      const { message } = error
      logger.error(`[ReviewController: findAll] - Unable to find reviews: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  updateOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params

      const model: CreateReview = {
        ...req.body,
        // @ts-ignore
        photo: req.file ? req.file.location : null
      }

      // validate request body
      const validity = ReviewValidator.createOne(model)
      if (validity.error) {
        const { message } = validity.error
        return ApiResponse.error(res, message)
      }

      const review = await this.reviewService.updateOne(_id, model)
      
      return ApiResponse.success(res,  { review })
    } catch (error) {
      const { message } = error
      logger.error(`[ReviewController: updateOne] - Unable to update review: ${message}`)
      return ApiResponse.error(res, message)
    }
  }

  deleteOne = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    try {
      const { _id } = req.params
      const review = await this.reviewService.deleteOne(_id)
      return ApiResponse.success(res,  { review })
    } catch (error) {
      const { message } = error
      logger.error(`[ReviewController: deleteOne] - Unable to delete review: ${message}`)
      return ApiResponse.error(res, message)
    }
  }
}