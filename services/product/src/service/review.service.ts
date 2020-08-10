import { injectable, inject } from 'inversify'
import { CreateReview } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { ReviewRepository } from '../data_access/repository/review.repository'
import { ReviewDocument } from '../data_access/model/review.model'

export interface ReviewService {
  createOne(model: CreateReview): Promise<ReviewDocument>
  findAll(_id: string): Promise<ReviewDocument[] | null>
  updateOne(_id: string, model: CreateReview): Promise<ReviewDocument | null>
  deleteOne(_id: string): Promise<ReviewDocument| null>
}

@injectable()
export class ReviewServiceImpl implements ReviewService {
  private reviewRepository: ReviewRepository

  constructor(@inject(TYPES.ReviewRepository) reviewRepository: ReviewRepository) {
    this.reviewRepository = reviewRepository
  }

  async createOne(model: CreateReview): Promise<ReviewDocument> { 
    try {
      return await this.reviewRepository.createOne(model)
    } catch(error) {
      logger.error(`[ReviewService: createOne]: Unable to create review: ${error}`)
      throw error
    }
  }

  async findAll(_id: string): Promise<ReviewDocument[] | null> { 
    try {
      return await this.reviewRepository.findAll(_id)
    } catch(error) {
      logger.error(`[ReviewService: findAll]: Unable to find reviews: ${error}`)
      throw error
    }
  }

  async updateOne(_id: string, model: CreateReview): Promise<ReviewDocument | null> { 
    try {
      return await this.reviewRepository.updateOne(_id, model)
    } catch(error) {
      logger.error(`[ReviewService: updateOne]: Unable to update review: ${error}`)
      throw error
    }
  }

  async deleteOne(_id: string): Promise<ReviewDocument | null> { 
    try {
      return await this.reviewRepository.deleteOne(_id)
    } catch(error) {
      logger.error(`[ReviewService: deleteOne]: Unable to delete review: ${error}`)
      throw error
    }
  }
}