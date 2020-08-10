import { injectable } from 'inversify'
import Review, { ReviewDocument } from '../model/review.model'
import { CreateReview } from '../../domain/interfaces'

export interface ReviewRepository {
  createOne(model: CreateReview): Promise<ReviewDocument>
  findById(_id: string): Promise<ReviewDocument | null>
  findAll(): Promise<ReviewDocument[] | null>
  updateOne(_id: string, model: CreateReview): Promise<ReviewDocument | null>
  deleteOne(_id: string): Promise<ReviewDocument | null>
}

@injectable()
export class ReviewRepositoryImpl implements ReviewRepository {
  async createOne(model: CreateReview): Promise<ReviewDocument> {
    const review = new Review(model)
    return await review.save()
  }

  async findById(_id: string): Promise<ReviewDocument | null> {
    return await Review.findById(_id)
  }

  async findAll(): Promise<ReviewDocument[] | null> {
    return await Review.find().select('-__v')
  }

  async updateOne(_id: string, model: CreateReview): Promise<ReviewDocument | null> {
    return await Review.findOneAndUpdate({ _id }, { $set: { ...model } }, { new: true });
  }

  async deleteOne(_id: string): Promise<ReviewDocument | null> {
    return await Review.findOneAndDelete({ _id })
  }
}